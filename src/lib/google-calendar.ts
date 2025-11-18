import { google } from "googleapis";
import { addMinutes, parse, setHours, setMinutes } from "date-fns";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";

const PST_TIMEZONE = "America/Los_Angeles";
const BUSINESS_HOURS_START = 8; // 8 AM
const BUSINESS_HOURS_END = 18; // 6 PM (last slot is 5:30 PM)
const SLOT_DURATION_MINUTES = 30;

/**
 * Initialize Google Calendar API with service account credentials
 * Uses user impersonation for creating Google Meet links
 */
function getCalendarClient() {
  // Check if we have a workspace user to impersonate
  const workspaceUser = process.env.GOOGLE_WORKSPACE_USER_EMAIL;

  if (workspaceUser) {
    // Use JWT with user impersonation (required for creating Meet links)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/calendar"],
      subject: workspaceUser, // Impersonate this user
    });

    return google.calendar({ version: "v3", auth });
  } else {
    // Fallback to regular service account (won't be able to create Meet links)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    return google.calendar({ version: "v3", auth });
  }
}

/**
 * Get all available 30-minute time slots for a given date (8am-6pm PST)
 * Returns slots that don't conflict with existing calendar events
 */
export async function getAvailableSlots(date: string): Promise<string[]> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_DEMO_CALENDAR_ID) {
      throw new Error("Google Calendar not configured");
    }

    const calendar = getCalendarClient();

    // Parse the date string (YYYY-MM-DD) and convert to PST timezone
    const selectedDate = parse(date, "yyyy-MM-dd", new Date());
    const selectedDatePST = toZonedTime(selectedDate, PST_TIMEZONE);

    // Create date at start of business hours (8 AM PST)
    const dayStart = setMinutes(setHours(selectedDatePST, BUSINESS_HOURS_START), 0);
    // Create date at end of business hours (6 PM PST)
    const dayEnd = setMinutes(setHours(selectedDatePST, BUSINESS_HOURS_END), 0);

    // Convert to ISO strings for calendar API (timezone aware)
    const timeMin = formatInTimeZone(dayStart, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
    const timeMax = formatInTimeZone(dayEnd, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");

    // Fetch busy times from Google Calendar
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        items: [{ id: process.env.GOOGLE_DEMO_CALENDAR_ID }],
        timeZone: PST_TIMEZONE,
      },
    });

    const busySlots = response.data.calendars?.[process.env.GOOGLE_DEMO_CALENDAR_ID!]?.busy || [];

    // Generate all possible 30-minute slots
    const allSlots: string[] = [];
    let currentSlot = dayStart;

    while (currentSlot < dayEnd) {
      const slotTime = formatInTimeZone(currentSlot, PST_TIMEZONE, "HH:mm");
      allSlots.push(slotTime);
      currentSlot = addMinutes(currentSlot, SLOT_DURATION_MINUTES);
    }

    // Filter out slots that conflict with busy times or buffer periods
    const availableSlots = allSlots.filter((slot) => {
      const [hours, minutes] = slot.split(":").map(Number);
      const slotStart = setMinutes(setHours(selectedDatePST, hours), minutes);
      const slotEnd = addMinutes(slotStart, SLOT_DURATION_MINUTES);

      // Convert to ISO for comparison
      const slotStartISO = formatInTimeZone(slotStart, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
      const slotEndISO = formatInTimeZone(slotEnd, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");

      // Check if this slot overlaps with any busy slot OR falls within buffer period
      const hasConflict = busySlots.some((busy) => {
        const busyStart = new Date(busy.start!).toISOString();
        const busyEnd = new Date(busy.end!).toISOString();

        // Add 30-minute buffer after the busy period
        const busyEndWithBuffer = new Date(new Date(busyEnd).getTime() + 30 * 60 * 1000).toISOString();

        const slotStartDate = new Date(slotStartISO).toISOString();
        const slotEndDate = new Date(slotEndISO).toISOString();

        // Overlap occurs if: slot starts before busy ends (with buffer) AND slot ends after busy starts
        return slotStartDate < busyEndWithBuffer && slotEndDate > busyStart;
      });

      return !hasConflict;
    });

    return availableSlots;
  } catch (error) {
    console.error("Error fetching available slots:", error);
    throw error;
  }
}

/**
 * Create a demo calendar event with auto-generated Google Meet link
 * Note: User is not added as attendee (service account limitation - requires Domain-Wide Delegation)
 * Calendar details are sent via email instead
 */
export async function createDemoEvent(
  name: string,
  email: string,
  school: string,
  date: string, // YYYY-MM-DD
  time: string  // HH:mm (e.g., "14:30")
): Promise<{ eventId: string; meetLink: string; eventLink: string }> {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_DEMO_CALENDAR_ID) {
      throw new Error("Google Calendar not configured");
    }

    const calendar = getCalendarClient();

    // Parse date and time in PST timezone
    const selectedDate = parse(date, "yyyy-MM-dd", new Date());
    const selectedDatePST = toZonedTime(selectedDate, PST_TIMEZONE);
    const [hours, minutes] = time.split(":").map(Number);
    const startTime = setMinutes(setHours(selectedDatePST, hours), minutes);
    const endTime = addMinutes(startTime, SLOT_DURATION_MINUTES);

    // Format as ISO strings with PST timezone
    const startISO = formatInTimeZone(startTime, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");
    const endISO = formatInTimeZone(endTime, PST_TIMEZONE, "yyyy-MM-dd'T'HH:mm:ssXXX");

    // Try to create event with Google Meet link
    // Falls back to static Meet link if workspace user impersonation isn't configured
    let meetLink = "";
    let eventId = "";
    let eventLink = "";

    const hasWorkspaceUser = !!process.env.GOOGLE_WORKSPACE_USER_EMAIL;

    if (hasWorkspaceUser) {
      // Create event with auto-generated Meet link (requires Domain-Wide Delegation)
      try {
        const event = await calendar.events.insert({
          calendarId: process.env.GOOGLE_DEMO_CALENDAR_ID,
          conferenceDataVersion: 1,
          requestBody: {
            summary: `Demo: ${school} - ${name}`,
            description: `Checkmark Plagiarism Demo

Attendee: ${name}
Email: ${email}
School: ${school}

This is a 30-minute demo to showcase Checkmark's plagiarism detection features.`,
            start: {
              dateTime: startISO,
              timeZone: PST_TIMEZONE,
            },
            end: {
              dateTime: endISO,
              timeZone: PST_TIMEZONE,
            },
            conferenceData: {
              createRequest: {
                requestId: `demo-${Date.now()}`,
                conferenceSolutionKey: { type: "hangoutsMeet" },
              },
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "email", minutes: 60 },
              ],
            },
          },
        });

        eventId = event.data.id!;
        meetLink = event.data.conferenceData?.entryPoints?.[0]?.uri || event.data.hangoutLink || "";
        eventLink = event.data.htmlLink || "";
      } catch (error) {
        console.error("Failed to create Meet link, falling back to static link:", error);
        // Fall through to static link approach
      }
    }

    // If Meet link creation failed or not configured, use static link
    if (!meetLink) {
      const staticMeetLink = process.env.GOOGLE_MEET_LINK || "https://meet.google.com/";

      const event = await calendar.events.insert({
        calendarId: process.env.GOOGLE_DEMO_CALENDAR_ID,
        requestBody: {
          summary: `Demo: ${school} - ${name}`,
          description: `Checkmark Plagiarism Demo

Attendee: ${name}
Email: ${email}
School: ${school}

Google Meet Link: ${staticMeetLink}

This is a 30-minute demo to showcase Checkmark's plagiarism detection features.`,
          start: {
            dateTime: startISO,
            timeZone: PST_TIMEZONE,
          },
          end: {
            dateTime: endISO,
            timeZone: PST_TIMEZONE,
          },
          location: staticMeetLink,
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 24 * 60 },
              { method: "email", minutes: 60 },
            ],
          },
        },
      });

      eventId = event.data.id!;
      meetLink = staticMeetLink;
      eventLink = event.data.htmlLink || "";
    }

    return { eventId, meetLink, eventLink };
  } catch (error) {
    console.error("Error creating demo event:", error);
    throw error;
  }
}

/**
 * Check if a specific time slot is still available (for double-checking before booking)
 */
export async function isSlotAvailable(date: string, time: string): Promise<boolean> {
  const availableSlots = await getAvailableSlots(date);
  return availableSlots.includes(time);
}
