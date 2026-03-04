import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-emirates-red text-white hover:bg-emirates-red-dark",
  secondary: "bg-white text-emirates-black border border-gray-300 hover:bg-gray-50",
  outline: "bg-transparent text-emirates-red border border-emirates-red hover:bg-emirates-red hover:text-white",
  ghost: "bg-transparent text-emirates-gray hover:bg-gray-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
