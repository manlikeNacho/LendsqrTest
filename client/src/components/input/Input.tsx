import React, { useState } from 'react';
import './input.style.scss';


interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: string;
  rightIcon?: string;
  showVisibilityToggle?: boolean;
  iconBgColor?: boolean
  label?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  rightIcon,
  showVisibilityToggle = false,
  iconBgColor = true,
  label,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="input-wrapper">
      {
        label && <label className='label'>
          {label}
        </label>
      }
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
      {rightIcon && <div className={`icon ${!iconBgColor && "bgColor-none"}`}>
        <img
            src={rightIcon}
            alt='search' className=''/>
        </div>}
    </div>
  );
};

export default Input;
