import { useContext, type FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { Button } from '../../../../common/buttons/Button/Button'
import { Input } from '../../../../common/fields/inputs'
import { useUserRegistrationMutation } from '../../../../utils/firebase/hooks/useUserRegistrationMutation'

import { email } from '../../../../utils/constants/validation/emailSchema'
import { password } from '../../../../utils/constants/validation/passwordSchema'
import { StoreContext } from '../../../../utils/context/store'
import styles from '../../AuthPage.module.css'

interface Inputs {
  name: string
  email: string
  city: string
  password: string
}

export const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isSubmitting }
  } = useForm<Inputs>()

  const { mutate, isLoading, status } = useUserRegistrationMutation()

  const { store, setStore } = useContext(StoreContext)
  console.log(store)

  const loading = isSubmitting || isLoading

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data)
    setStore((prev) => ({ ...prev, session: { isLogin: true } }))
  }

  return (
    <>
      <div className={styles.cover}></div>
      <h1 className={styles.login}>Registration</h1>
      {status === 'error' ? (
        <h1 className='text-red-500'>Some error :(</h1>
      ) : status === 'success' ? (
        <h1 className='text-blue-600'>Congratulations!!!</h1>
      ) : null}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Name field is required' }
          })}
          placeholder='Name'
          disabled={loading}
          error={formErrors.name?.message}
        />
        <Input
          {...register('email', email)}
          placeholder='Email'
          disabled={loading}
          error={formErrors.email?.message}
        />
        <Input
          {...register('city', {
            required: { value: true, message: 'City field is required' }
          })}
          placeholder='City'
          disabled={loading}
          error={formErrors.city?.message}
        />
        <Input
          type='password'
          {...register('password', password)}
          placeholder='Password'
          disabled={loading}
          error={formErrors.password?.message}
        />
        <Button type='submit' loading={loading}>
          Sign up
        </Button>
      </form>
    </>
  )
}
