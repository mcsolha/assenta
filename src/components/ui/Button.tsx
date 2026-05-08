import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-[6px] font-medium text-[14px] transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar",
  {
    variants: {
      variant: {
        primary:
          "bg-ambar text-linho hover:bg-[#a55c13] shadow-[0_1px_0_rgba(42,29,20,.15),0_6px_14px_-8px_rgba(184,106,28,.5)]",
        ghost:
          "bg-transparent text-imbuia border border-[rgba(42,29,20,.18)] hover:bg-[rgba(42,29,20,.04)]",
        danger:
          "bg-tijolo text-linho hover:bg-[#7e2017]",
      },
      size: {
        md: "px-[18px] py-[11px]",
        sm: "px-3 py-2 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
