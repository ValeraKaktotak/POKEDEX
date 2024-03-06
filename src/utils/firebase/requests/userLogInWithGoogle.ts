import { signInWithPopup, type UserCredential } from 'firebase/auth'
import { auth, googleAuthProvider } from '..'

export const userLogInWithGoogle = async (): Promise<UserCredential> => {
  const response = await signInWithPopup(auth, googleAuthProvider)
  return response
}
