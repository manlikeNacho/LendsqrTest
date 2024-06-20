import React, { useState } from 'react';
import './input.style.scss';
import searchIcon from '../../static/bell-icon.svg'
interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: string;
  rightIcon?: string;
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
      {rightIcon && <div className="icon">
        <img
            src={rightIcon}
            alt='search' className=''/>
        </div>}
    </div>
  );
};

export default Input;
