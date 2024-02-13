import { createUserWithEmailAndPassword } from 'firebase/auth'
import type { UserCredential } from '../../../../node_modules/@firebase/auth/dist/auth-public.d'
import { auth } from '../../../firebase'

// Hook for registration
export interface IRegistrationUser {
  firstName: string
  lastName: string
  email: string
  city: string
  password: string
}
export const userRegistration = async (
  user: IRegistrationUser
): Promise<UserCredential | any> => {
  try {
    return await createUserWithEmailAndPassword(auth, user.email, user.password)
  } catch (error: any) {
    console.log(error.message)
  }
}
