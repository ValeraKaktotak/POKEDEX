import { signInWithEmailAndPassword } from 'firebase/auth'
import type { UserCredential } from '../../../../node_modules/@firebase/auth/dist/auth-public.d'
import { auth } from '../../../firebase'

// Hook for logIn
export interface ILoginUser {
  email: string
  password: string
}
export const userLogIn = async (
  user: ILoginUser
): Promise<UserCredential | any> => {
  try {
    return await signInWithEmailAndPassword(auth, user.email, user.password)
  } catch (error: any) {
    console.log(error.message)
  }
}
