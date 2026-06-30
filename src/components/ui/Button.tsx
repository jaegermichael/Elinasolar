import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-brand-gold text-charcoal hover:bg-brand-gold-light hover:shadow-glow-gold focus-visible:ring-brand-gold",
      secondary: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white",
      dark: "bg-brand-gold text-charcoal hover:bg-brand-gold-light hover:shadow-glow-gold focus-visible:ring-brand-gold",
      "outline-dark": "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-charcoal focus-visible:ring-brand-gold",
      ghost: "text-white hover:bg-white/10 focus-visible:ring-white/20",
    };

    const sizes = {
      sm: "px-4 py-2 text-body-sm",
      md: "px-6 py-3.5 text-body-md",
      lg: "px-8 py-4 text-body-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";