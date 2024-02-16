import { signInWithEmailAndPassword, type UserCredential } from 'firebase/auth'
import { auth } from '../index'

// Hook for logIn
export interface ILoginUser {
  email: string
  password: string
}
export const userLogIn = async (
  user: ILoginUser
): Promise<UserCredential | any> => {
  return await signInWithEmailAndPassword(auth, user.email, user.password)
}
