import * as React from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * Button label text
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Optional button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Optional disabled state
   */
  disabled?: boolean;
  /**
   * Optional className for styling
   */
  className?: string;
  /**
   * Optional children elements
   */
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`rcl-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
