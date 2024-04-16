import { signOut } from 'firebase/auth'

import { auth } from '..'

export const userLogOut = async (): Promise<void> => {
  try {
    await signOut(auth)
    console.log('User logged out successfully.') // Добавьте обработку успешного выхода
  } catch (error) {
    console.error('Error signing out:', error)
  }

  // аналог на then

  // signOut(auth)
  //   .then(() => {
  //     console.log('User logged out successfully.') // Добавьте обработку успешного выхода
  //   })
  //   .catch((error) => {
  //     console.error('Error signing out:', error)
  //   })
}
