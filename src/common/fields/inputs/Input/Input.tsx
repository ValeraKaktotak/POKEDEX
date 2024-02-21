import React from 'react'

import classNames from 'classnames'
import styles from './Input.module.css'

interface IInput extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, error, ...props }, inputRef) => {
    console.log(error)

    return (
      <label className={styles.container} htmlFor={placeholder}>
        <span className={styles.label}>{placeholder}</span>
        <input
          className={classNames(styles.input, { [styles.error]: error })}
          id={placeholder}
          ref={inputRef}
          {...props}
        />
        <span className={styles.error}>{error}</span>
      </label>
    )
  }
)
Input.displayName = 'Input'
