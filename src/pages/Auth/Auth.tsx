import React, { type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import styles from './Auth.module.css'

interface Inputs {
  firstName: string
  lastName: string
  email: string
  password: string
}

export const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()
  const [isSignUp, setSignUp] = React.useState<boolean>(true)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className={styles.container}>Auth</div>
      {isSignUp && (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>First Name</label>
          <input {...register('firstName', { required: true })} />
          <label>Last Name</label>
          <input {...register('lastName', { required: true })} />
          <label>Email</label>
          <input {...register('email', { required: true })} />
          <label>Password</label>
          <input
            type='password'
            {...register('password', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.firstName && <span>FirstName field is required</span>}
          {errors.lastName && <span>LastName field is required</span>}
          {errors.email && <span>Email field is required</span>}
          {errors.password && <span>Password field is required</span>}
          <button type='submit'>Sign up</button>
        </form>
      )}
    </>
  )
}
