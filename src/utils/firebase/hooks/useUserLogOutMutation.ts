import { useContext } from 'react'
import { useMutation, type UseMutationResult } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { StoreContext } from '../../context/store'
import { userLogOut } from '../requests/userLogOut'

export const useUserLogOutMutation = (): UseMutationResult<
  unknown,
  unknown,
  unknown,
  unknown
> => {
  const navigation = useNavigate()
  const { setStore } = useContext(StoreContext)
  return useMutation<unknown, unknown, unknown, unknown>(
    ['userLogOut'],
    async (): Promise<void> => {
      await userLogOut()
    },
    {
      onError: async (data) => {
        return data
      },
      onSuccess: async () => {
        setStore((prev) => ({ ...prev, session: { isLogin: false } }))
        // navigation('/')
      }
    }
  )
}
