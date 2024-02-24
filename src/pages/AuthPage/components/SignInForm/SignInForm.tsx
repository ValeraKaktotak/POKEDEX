import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Input } from '../../../../common/fields/inputs'
import { useUserLogIn } from '../../../../utils/firebase/hooks/useUserLogIn'

import { Button } from '../../../../common/buttons/Button/Button'
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
          {...register('email', {
            required: { value: true, message: 'Email field is required' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            }
          })}
          placeholder='Email'
          disabled={isSubmitting}
          error={errors.email?.message}
        />
        <Input
          type='password'
          {...register('password', {
            required: { value: true, message: 'Password field is required' },
            minLength: { value: 6, message: 'Password field min length is 6' },
            maxLength: { value: 16, message: 'Password field max length is 16' }
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
        <Button type='submit' disabled={isSubmitting}>
          Sign in
        </Button>
      </form>
    </>
  )
}
