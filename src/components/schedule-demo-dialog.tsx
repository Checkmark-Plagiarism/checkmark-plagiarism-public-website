"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addDays, format } from "date-fns";

interface ScheduleDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  school: string;
};

type ConfirmationData = {
  name: string;
  email: string;
  school: string;
  date: string;
  time: string;
  meetLink: string;
  emailFrom: string;
};

export default function ScheduleDemoDialog({ isOpen, onClose }: ScheduleDemoDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);

  // Date and time selection
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
      setConfirmationData(null);
      setSelectedDate(undefined);
      setSelectedTime("");
      setAvailableSlots([]);
      reset();
    }
  }, [isOpen, reset]);

  // Fetch available slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    } else {
      setAvailableSlots([]);
      setSelectedTime("");
    }
  }, [selectedDate]);

  // Ensure Turnstile widget renders after Dialog opens
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && status !== 'ok') {
      // Give Dialog time to mount, then check if Turnstile needs manual rendering
      const timer = setTimeout(() => {
        const widget = document.getElementById('cf-turnstile-demo');
        if (widget && window.turnstile && !widget.querySelector('iframe')) {
          // Widget exists but hasn't been rendered yet, render it manually
          try {
            window.turnstile.render('#cf-turnstile-demo', {
              sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
              theme: 'auto',
            });
          } catch (error) {
            console.log('Turnstile already rendered or error:', error);
          }
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status]);

  const fetchAvailableSlots = async (date: Date) => {
    setLoadingSlots(true);
    setSelectedTime("");
    try {
      const dateStr = format(date, "yyyy-MM-dd");
      const res = await fetch(`/api/schedule-demo?date=${dateStr}`);
      const data = await res.json();

      if (data.ok) {
        setAvailableSlots(data.slots || []);
      } else {
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const onSubmit = async (values: FormData) => {
    setStatus("idle");
    setErrorMessage("");

    if (!selectedDate || !selectedTime) {
      setErrorMessage("Please select a date and time.");
      return;
    }

    // Read token from the auto-rendered widget
    const token = window.turnstile?.getResponse?.("#cf-turnstile-demo") ?? null;
    if (!token) {
      setErrorMessage("Please complete the captcha.");
      return;
    }

    const dateStr = format(selectedDate, "yyyy-MM-dd");

    const res = await fetch("/api/schedule-demo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...values,
        date: dateStr,
        time: selectedTime,
        token,
      }),
    });

    const data = await res.json();

    if (data.ok) {
      setStatus("ok");
      setConfirmationData({
        name: values.name,
        email: values.email,
        school: values.school,
        date: data.date,
        time: data.time,
        meetLink: data.meetLink,
        emailFrom: data.emailFrom,
      });
      reset();
      setSelectedDate(undefined);
      setSelectedTime("");
      window.turnstile?.reset?.("#cf-turnstile-demo");
    } else {
      setStatus("error");
      setErrorMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    // State reset is handled by useEffect when isOpen becomes false
    onClose();
  };

  // Disable weekends and dates in the past or more than 60 days out
  const disabledDays = [
    { before: addDays(new Date(), 1) }, // Must be at least 24 hours in advance
    { after: addDays(new Date(), 60) }, // Max 60 days out
    { dayOfWeek: [0, 6] }, // Disable Sunday (0) and Saturday (6)
  ];

  // Format time for display (e.g., "14:30" -> "2:30 PM PST")
  const formatTimeDisplay = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const isPM = hours >= 12;
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${isPM ? "PM" : "AM"} PST`;
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {status === "ok" ? "Demo Scheduled!" : "Schedule a Demo"}
            </DialogTitle>
            <DialogDescription>
              {status === "ok"
                ? "Your demo has been confirmed. Check your email for details."
                : "Book a 30-minute demo to see how Checkmark can help your school detect plagiarism."}
            </DialogDescription>
          </DialogHeader>

          {status === "ok" && confirmationData ? (
            <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-6">
              <p className="text-sm text-green-800 mb-4">
                Your demo has been scheduled for <strong>{confirmationData.date}</strong> at <strong>{confirmationData.time}</strong>.
              </p>
              <div className="border-t border-green-200 pt-4 mt-4">
                <p className="text-sm text-green-800 mb-2">
                  We&apos;ve sent all the details to <strong>{confirmationData.email}</strong>, including your Google Meet link.
                </p>
                <br></br>
                <p className="text-sm text-green-700">
                  Please check your spam folder and whitelist <strong>{confirmationData.emailFrom}</strong> to ensure you receive all communications.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  className="w-full rounded border p-2"
                  placeholder="Jane Doe"
                  {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">Name is required.</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full rounded border p-2"
                  placeholder="jane@school.edu"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">Valid email required.</p>}
              </div>

              {/* School */}
              <div>
                <label className="block text-sm font-medium mb-1">School</label>
                <input
                  type="text"
                  className="w-full rounded border p-2"
                  placeholder="Your school or institution"
                  {...register("school", { required: true, maxLength: 200 })}
                />
                {errors.school && <p className="text-sm text-red-600 mt-1">School is required.</p>}
              </div>

              {/* Date and Time Selection - Side by Side */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Date & Time</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div className="border rounded p-4 bg-white">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={disabledDays}
                      className="mx-auto"
                    />
                  </div>

                  {/* Time Slot Selector */}
                  <div className="border rounded p-4 bg-white">
                    {!selectedDate ? (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-sm text-gray-500 text-center">
                          Select a date to see available times
                        </p>
                      </div>
                    ) : loadingSlots ? (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-sm text-gray-500">Loading available times...</p>
                      </div>
                    ) : availableSlots.length === 0 ? (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-sm text-red-600 text-center">No available times for this date. Please select another date.</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Available Times (PST)</p>
                        <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-2">
                          {availableSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-2 rounded text-sm transition-colors ${
                                selectedTime === slot
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                              }`}
                            >
                              {formatTimeDisplay(slot)}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {selectedDate && (
                  <p className="text-sm text-gray-600 mt-2">
                    Selected: {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    {selectedTime && ` at ${formatTimeDisplay(selectedTime)}`}
                  </p>
                )}
              </div>

              {/* Turnstile + Submit */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedDate || !selectedTime}
                  className="w-full sm:w-auto rounded bg-black px-6 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Demo"}
                </button>

                <div
                  id="cf-turnstile-demo"
                  className="cf-turnstile"
                  data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  data-theme="auto"
                  data-render="explicit"
                />
              </div>

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <p className="text-red-700 text-sm">{errorMessage}</p>
              )}
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
