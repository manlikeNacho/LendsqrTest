import React, { useState } from 'react';
import classNames from 'classnames';
import './input.style.scss';

interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showVisibilityToggle?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
  showVisibilityToggle = false,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="input-wrapper">
      {leftIcon && <span className="icon left">{leftIcon}</span>}
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {showVisibilityToggle && (
        <button type="button" className="icon visibility-toggle" onClick={toggleVisibility}>
          {inputType === 'password' ? 'SHOW' : 'HIDE'}
        </button>
      )}
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </div>
  );
};

export default Input;
