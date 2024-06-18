import React from 'react'
import classnames from 'classnames'
import './btn.style.scss'



const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  isLoading = false,
  variant = 'solid',
  color = 'primary'
}) => {
  return (
    <button 
    type= {type || 'button'}
    onClick={onClick}
    disabled={isLoading || false}
    className={classnames(
      'button',
      `button--${variant}`,
      `button--${color}`,
      { 'button--loading': isLoading }
    )}
    >
    {children}
    </button>
  )
}

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    isLoading?: boolean;
    variant?: 'solid' | 'outlined';
    color?: 'primary' | 'secondary' | 'danger';
  }

export default Button