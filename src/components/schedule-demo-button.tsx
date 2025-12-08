"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import ScheduleDemoDialog from "./schedule-demo-dialog";

interface ScheduleDemoButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export default function ScheduleDemoButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
}: ScheduleDemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Variant styles
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-black text-black hover:bg-gray-100",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Icon sizes based on button size
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`rounded font-medium transition-colors flex items-center justify-center gap-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      >
        <Calendar className={iconSizes[size]} />
        {children || "Schedule Demo"}
      </button>

      <ScheduleDemoDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
