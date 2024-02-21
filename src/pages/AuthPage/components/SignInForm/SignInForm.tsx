import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Input } from '../../../../common/fields/inputs'
import { useUserLogIn } from '../../../../utils/firebase/hooks/useUserLogIn'

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
  } = useForm<Inputs>()

  const { isLoading, mutate, data: logInRequestData, error } = useUserLogIn()

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
          type='email'
          {...register('email', {
            required: { value: true, message: 'Email field is required' }
          })}
          placeholder='Email'
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Input
          type='password'
          {...register('password', {
            required: { value: true, message: 'Password field is required' },
            minLength: { value: 6, message: 'Password field min length is 6' }
          })}
          placeholder='Password'
          disabled={isSubmitting}
          error={errors.password?.message}
        />
        {/* errors will return when field validation fails  */}
        {/* {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )} */}
        <button type='submit' disabled={isSubmitting}>
          Sign in
        </button>
      </form>
    </>
  )
}
