import React, { type FC } from 'react'

import styles from './AuthPage.module.css'
import { SignUpForm } from './components/SignUpForm/SignUpForm'

interface Inputs {
  firstName: string
  lastName: string
  email: string
  city: string
  password: string
}

export const AuthPage: FC = () => {
  const [isSignUp, setSignUp] = React.useState<boolean>(true)
  return (
    <>
      <div className={styles.container}>Auth</div>
      {isSignUp && <SignUpForm isSignUp />}
    </>
  )
}
