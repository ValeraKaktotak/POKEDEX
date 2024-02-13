import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { Input } from '../../../../common/fields/inputs'
import { userLogIn } from '../../../../firebase'
import styles from '../../AuthPage.module.css'

interface Inputs {
  email: string
  password: string
}
interface ISignUpForm {
  isSignUp: boolean
}

export const SignInForm: FC<ISignUpForm> = ({ isSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    userLogIn(data)
  }

  return (
    <>
      {isSignUp && (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            {...register('email', { required: true })}
            placeholder='Email'
            disabled={isSubmitting}
          />
          <Input
            type='password'
            {...register('password', { required: true })}
            placeholder='Password'
            disabled={isSubmitting}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className={styles.error}>Email field is required</span>
          )}
          {errors.password && (
            <span className={styles.error}>Password field is required</span>
          )}
          <button type='submit' disabled={isSubmitting}>
            Sign in
          </button>
        </form>
      )}
    </>
  )
}
