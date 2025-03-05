import React from 'react';
import './Button.css';

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
  type?: 'button' | 'submit' | 'reset';
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
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`rcl-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button; 