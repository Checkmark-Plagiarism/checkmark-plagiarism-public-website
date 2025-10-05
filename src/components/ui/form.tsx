"use server";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

// --- Context & hook ----------------------------------------------------------

type FormItemContextValue = {
  /** Base id for this form item (used to derive htmlFor / aria ids). */
  id: string;
  /** Optional error to style and announce */
  error?: React.ReactNode;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

export const useFormField = async () => {
  const ctx = React.useContext(FormItemContext);
  if (!ctx) {
    throw new Error("useFormField must be used within <FormItem>");
  }

  const formItemId = `${ctx.id}-form-item`;
  const formDescriptionId = `${ctx.id}-form-item-description`;
  const formMessageId = `${ctx.id}-form-item-message`;

  return {
    id: ctx.id,
    error: ctx.error,
    formItemId,
    formDescriptionId,
    formMessageId,
  };
};

// --- Primitives --------------------------------------------------------------

/** Optional wrapper if you want a semantic <form> root. */
const Form = React.forwardRef<
  HTMLFormElement,
  React.ComponentPropsWithoutRef<"form">
>(({ className, ...props }, ref) => {
  return <form ref={ref} className={cn(className)} {...props} />;
});
Form.displayName = "Form";

/**
 * Wrap a single field group. Provides generated ids and an optional `error`
 * to descendants (Label, Control, Description, Message).
 */
const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /** Optional explicit id (otherwise generated) */
    id?: string;
    /** Error content for this field (string or node). Controls aria-invalid. */
    error?: React.ReactNode;
  }
>(({ className, id: explicitId, error, ...props }, ref) => {
  const autoId = React.useId();
  const baseId = explicitId ?? autoId;

  return (
    <FormItemContext.Provider value={{ id: baseId, error }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

/**
 * Wrap your actual input element with <FormControl asChild>.
 * Example:
 *   <FormControl asChild>
 *     <input type="text" />
 *   </FormControl>
 */
const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  const describedBy = error
    ? `${formDescriptionId} ${formMessageId}`.trim()
    : formDescriptionId;

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={describedBy || undefined}
      aria-invalid={Boolean(error)}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    /** If provided, overrides context error text */
    message?: React.ReactNode;
  }
>(({ className, children, message, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = message ?? error ?? children;
  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

// --- Exports ----------------------------------------------------------------

export { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage };
