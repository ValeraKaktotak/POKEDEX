import type { FC } from 'react'
import styles from './Auth.module.css'

interface IAuth {}

export const Auth: FC<IAuth> = ({}) => {
  return <div className={styles.container}>Auth</div>
}
