import type { FC } from 'react'
import styles from './Input.module.css'

interface IInput extends React.ComponentPropsWithRef<'input'> {
  isLoading?: boolean
}

export const Input: FC<IInput> = ({ id, placeholder, ...props }) => {
  console.log(id)

  return (
    <label className={styles.container} htmlFor={placeholder}>
      <span className={styles.label}>{placeholder}</span>
      <input className={styles.input} id={placeholder} {...props} />
    </label>
  )
}
