import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'navy' | 'outline' | 'blue' | 'white' | 'outline-white';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ 
  variant = 'navy', 
  children, 
  icon,
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
