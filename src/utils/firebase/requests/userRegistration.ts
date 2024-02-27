import {
  createUserWithEmailAndPassword,
  type UserCredential
} from 'firebase/auth'

import { auth } from '..'

// Hook for registration
export interface IRegistrationUser {
  name: string
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
    const errorCode = error.code
    throw errorCode
  }
}
