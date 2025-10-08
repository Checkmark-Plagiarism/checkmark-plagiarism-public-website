import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* keep your existing buttonVariants */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-soft hover:shadow-medium transform hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-muted hover:border-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-soft hover:shadow-medium transform hover:scale-105",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-hover shadow-soft hover:shadow-medium transform hover:scale-105",
        hero:
          "bg-gradient-primary text-white hover:opacity-90 shadow-medium hover:shadow-large transform hover:scale-105",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type LinkButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  VariantProps<typeof buttonVariants> &
  LinkProps & {
    href: LinkProps["href"];
  };

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
LinkButton.displayName = "LinkButton";
