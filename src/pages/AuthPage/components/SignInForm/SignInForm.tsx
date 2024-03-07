import { type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Button } from '../../../../common/buttons/Button/Button'
import { Input } from '../../../../common/fields/inputs'
import { email } from '../../../../utils/constants/validation/emailSchema'
import { password } from '../../../../utils/constants/validation/passwordSchema.ts'
import { useUserLogInMutation } from '../../../../utils/firebase/hooks/useUserLogInMutation'
import { useUserLogInWithGoogleMutation } from '../../../../utils/firebase/hooks/useUserLogInWithGoogleMutation.ts'

import styles from '../../AuthPage.module.css'

interface Inputs {
  email: string
  password: string
}

export const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({ reValidateMode: 'onSubmit' })

  const { mutate, isLoading } = useUserLogInMutation()
  const { mutate: loginWithGoogle, isLoading: googleIsLoading } =
    useUserLogInWithGoogleMutation()

  const loading = isSubmitting || isLoading || googleIsLoading

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data)
  }

  return (
    <>
      <div className={styles.cover}></div>
      <h1 className={styles.login}>Login</h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          {...register('email', email)}
          placeholder='Email'
          disabled={loading}
          error={errors.email?.message}
        />
        <Input
          type='password'
          {...register('password', password)}
          placeholder='Password'
          disabled={loading}
          error={errors.password?.message}
        />
        <Button type='submit' loading={loading}>
          Sign in
        </Button>
      </form>
      <Button
        onClick={() => {
          loginWithGoogle({})
        }}
        loading={loading}
      >
        Sign in with Google
      </Button>
    </>
  )
}
