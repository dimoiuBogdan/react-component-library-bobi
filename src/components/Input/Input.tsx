import * as React from "react";
import "./Input.css";

export interface InputProps {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input name
   */
  name?: string;
  /**
   * Input type
   */
  type?: string;
  /**
   * Input change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optional disabled state
   */
  disabled?: boolean;
  /**
   * Optional className for styling
   */
  className?: string;
}

/**
 * Input component for user data entry
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = "",
      value = "",
      name = "",
      type = "text",
      onChange,
      disabled = false,
      className = "",
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`rcl-input ${className}`}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
