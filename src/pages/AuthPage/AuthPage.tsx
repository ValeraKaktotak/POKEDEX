import React, { type FC } from 'react'

import { Button } from '../../common/buttons/Button/Button'

import { SignInForm } from './components/SignInForm/SignInForm'
import { SignUpForm } from './components/SignUpForm/SignUpForm'

import styles from './AuthPage.module.css'

export const AuthPage: FC = () => {
  const [isSignUp, setSignUp] = React.useState<boolean>(true)
  return (
    <>
      <section className={styles.container}>
        {isSignUp ? <SignInForm /> : <SignUpForm />}
        <Button
          variant='text'
          onClick={() => {
            setSignUp(!isSignUp)
          }}
        >
          {isSignUp ? 'create new account' : 'have an account'}
        </Button>
      </section>
    </>
  )
}
