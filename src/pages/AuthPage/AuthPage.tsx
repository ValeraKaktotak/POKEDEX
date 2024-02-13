import React, { type FC } from 'react'

import { Button } from '../../common/buttons/Button/Button'
import styles from './AuthPage.module.css'
import { SignInForm } from './components/SignInForm/SignInForm'
import { SignUpForm } from './components/SignUpForm/SignUpForm'

export const AuthPage: FC = () => {
  const [isSignUp, setSignUp] = React.useState<boolean>(true)
  return (
    <>
      <div className={styles.container}>
        {isSignUp ? <SignInForm isSignUp /> : <SignUpForm isSignUp />}
        <Button
          onClick={() => {
            setSignUp(!isSignUp)
          }}
        >
          {isSignUp ? <span>Sign Up</span> : <span>Sign In</span>}
        </Button>
      </div>
    </>
  )
}
