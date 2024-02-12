import React, { type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { userRegistration } from '../../firebase'

import { Input } from '../../common/fields/inputs'
import styles from './AuthPage.module.css'

interface Inputs {
  firstName: string
  lastName: string
  email: string
  city: string
  password: string
}

export const AuthPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>()
  const [isSignUp, setSignUp] = React.useState<boolean>(true)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    userRegistration(data)
  }

  return (
    <>
      <div className={styles.container}>Auth</div>
      {isSignUp && (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            {...register('firstName', { required: true })}
            placeholder='First Name'
            disabled={isSubmitting}
          />
          <Input
            {...register('lastName', { required: true })}
            placeholder='Last Name'
            disabled={isSubmitting}
          />
          <Input
            {...register('email', { required: true })}
            placeholder='Email'
            disabled={isSubmitting}
          />
          <Input
            {...register('city', { required: true })}
            placeholder='City'
            disabled={isSubmitting}
          />
          <Input
            type='password'
            {...register('password', { required: true })}
            placeholder='Password'
            disabled={isSubmitting}
          />
          {/* errors will return when field validation fails  */}
          {errors.firstName && (
            <span className={styles.error}>FirstName field is required</span>
          )}
          {errors.lastName && (
            <span className={styles.error}>LastName field is required</span>
          )}
          {errors.email && (
            <span className={styles.error}>Email field is required</span>
          )}
          {errors.password && (
            <span className={styles.error}>Password field is required</span>
          )}
          <button type='submit' disabled={isSubmitting}>
            Sign up
          </button>
        </form>
      )}
    </>
  )
}
