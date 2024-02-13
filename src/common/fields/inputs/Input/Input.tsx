import React from 'react'
import styles from './Input.module.css'

interface IInput extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, ...props }, inputRef) => {
    return (
      <label className={styles.container} htmlFor={placeholder}>
        <span className={styles.label}>{placeholder}</span>
        <input
          className={styles.input}
          id={placeholder}
          ref={inputRef}
          {...props}
        />
      </label>
    )
  }
)
Input.displayName = 'Input'
