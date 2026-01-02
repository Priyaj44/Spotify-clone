import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "outline" | "link" | "secondary";
  size?: "icon" | "sm" | "default";
  className?: string;
};

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

export default Button;
