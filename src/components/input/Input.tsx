import React, { useState } from 'react';
import './input.style.scss';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: string;
  rightIcon?: string;
  showVisibilityToggle?: boolean;
  iconBgColor?: boolean
  label?: string;
  labelType?: 'none' | 'rightLabel' | 'leftLabel'
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  rightIcon,
  showVisibilityToggle = false,
  iconBgColor = true,
  label,
  labelType,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="input-wrapper">
      {
        label && <label className={`label ${labelType}`}>
          {label}
        </label>
      }
      <input
      {...rest}
        type={inputType}
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
