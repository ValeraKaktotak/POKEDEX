import { onAuthStateChanged, type User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '..'

interface IUseAuthState {
  userData: User | null
}

export const useAuthState = (): IUseAuthState => {
  const [userData, setUserDate] = useState<User | null>(null)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      setUserDate(user)
    })
    return () => {
      listener()
    }
  }, [auth])

  return { userData }
}
