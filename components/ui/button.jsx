import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button variants using the class-variance-authority (cva) utility
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors", // Corrected "ring-offer-white" to "ring-offset-white"
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover", // Fixed "text-primery" to "text-primary"
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component using forwardRef for ref forwarding
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"; // Use Slot component if "asChild" is true
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))} // Apply combined classNames
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button"; // Set display name for React DevTools

export { Button, buttonVariants };
