"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addDays, format } from "date-fns";
import { fromZonedTime, formatInTimeZone } from "date-fns-tz";

declare global { interface Window { uetq?: unknown[] } }

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

export const CanvasDemo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>();

    const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string>("");
    const [loadingSlots, setLoadingSlots] = useState(false);

    const [userTimezone, setUserTimezone] = useState<string>("America/Los_Angeles");
    const [timezoneAbbr, setTimezoneAbbr] = useState<string>("PST");

    // Detect user's timezone on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
                setUserTimezone(detected);
                const date = new Date();
                const abbr = date.toLocaleTimeString("en-US", { timeZone: detected, timeZoneName: "short" }).split(" ")[2] || "PST";
                setTimezoneAbbr(abbr);
            } catch (error) {
                console.error("Error detecting timezone:", error);
            }
        }
    }, []);

    // Render Turnstile widget on mount
    useEffect(() => {
        if (typeof window !== "undefined" && status !== "ok") {
            const timer = setTimeout(() => {
                const widget = document.getElementById("cf-turnstile-demo-inline");
                if (widget && window.turnstile && !widget.querySelector("iframe")) {
                    try {
                        window.turnstile.render("#cf-turnstile-demo-inline", {
                            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                            theme: "auto",
                        });
                    } catch (error) {
                        console.log("Turnstile already rendered or error:", error);
                    }
                }
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [status]);

    // Fetch available slots when date is selected
    useEffect(() => {
        if (selectedDate) {
            fetchAvailableSlots(selectedDate);
        } else {
            setAvailableSlots([]);
            setSelectedTime("");
        }
    }, [selectedDate]);

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

        const token = window.turnstile?.getResponse?.("#cf-turnstile-demo-inline") ?? null;
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
            window.uetq = window.uetq || [];
            window.uetq.push("event", "book_appointment", {
                event_category: "appointment",
                event_label: "Appointment Booking",
                event_value: "1",
            });
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
            window.turnstile?.reset?.("#cf-turnstile-demo-inline");
        } else {
            setStatus("error");
            setErrorMessage(data.error || "Something went wrong. Please try again.");
        }
    };

    const disabledDays = [
        { before: addDays(new Date(), 1) },
        { after: addDays(new Date(), 60) },
        { dayOfWeek: [0, 6] },
    ];

    const formatTimeDisplay = (pstTime: string) => {
        if (!selectedDate) return pstTime;
        try {
            const dateStr = format(selectedDate, "yyyy-MM-dd");
            const pstDateTime = fromZonedTime(`${dateStr} ${pstTime}:00`, "America/Los_Angeles");
            const localTime = formatInTimeZone(pstDateTime, userTimezone, "h:mm a");
            return `${localTime} ${timezoneAbbr}`;
        } catch (error) {
            console.error("Error formatting time:", error);
            const [hours, minutes] = pstTime.split(":").map(Number);
            const isPM = hours >= 12;
            const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
            return `${displayHours}:${minutes.toString().padStart(2, "0")} ${isPM ? "PM" : "AM"} PST`;
        }
    };

    return (
        <>
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="afterInteractive"
            />

            <div id="demo" className="bg-brand-300 pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4 text-center">
                            Schedule a Demo
                        </h1>
                        <p className="text-center text-brand-700 mb-8">
                            Book a 30-minute demo to see how Checkmark can help your school detect plagiarism.
                        </p>

                        {status === "ok" && confirmationData ? (
                            <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                                <p className="text-sm text-green-800 mb-4">
                                    Your demo has been scheduled for <strong>{confirmationData.date}</strong> at <strong>{confirmationData.time}</strong>.
                                </p>
                                <div className="border-t border-green-200 pt-4 mt-4">
                                    <p className="text-sm text-green-800 mb-2">
                                        We&apos;ve sent all the details to <strong>{confirmationData.email}</strong>, including your Google Meet link.
                                    </p>
                                    <br />
                                    <p className="text-sm text-green-700">
                                        Please check your spam folder and whitelist <strong>{confirmationData.emailFrom}</strong> to ensure you receive all communications.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                                    {/* Date and Time Selection */}
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
                                                        <p className="text-sm font-medium text-gray-700 mb-3">Available Times ({timezoneAbbr})</p>
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
                                            id="cf-turnstile-demo-inline"
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
