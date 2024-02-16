import type { UserCredential } from 'firebase/auth'
import { useMutation, type UseMutationResult } from 'react-query'

import { type ILoginUser,userLogIn } from '../requests/userLogIn'

export const useUserLogIn = (): UseMutationResult<
  Promise<UserCredential | any>,
  unknown,
  ILoginUser,
  unknown
> => {
  return useMutation<
    Promise<UserCredential | any>,
    unknown,
    ILoginUser,
    unknown
  >(
    ['userLogIn'],
    async (param: ILoginUser) => {
      const result = await userLogIn(param)
      return result
    },
    {
      onError: async (data) => {
        // console.log('ERROR', data)
        return data
      }
      // enabled: param.isLoaded,
      // refetchOnWindowFocus: false
      // keepPreviousData: true
    }
  )
}
