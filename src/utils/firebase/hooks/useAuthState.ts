import { onAuthStateChanged, type User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '..'

export const useAuthState = (): User | null => {
  const [userDate, setUserDate] = useState<User | null>(null)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      setUserDate(user)
    })
    return () => {
      listener()
    }
  }, [auth])

  return userDate
}
