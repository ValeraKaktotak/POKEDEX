import { createContext } from 'react'

interface Store {
  session: {
    isLogin: boolean
  }
}

export interface IStoreContext {
  store: Store
  setStore: React.Dispatch<React.SetStateAction<Store>>
}

export const StoreContext = createContext<IStoreContext>({
  store: {
    session: {
      isLogin: false
    }
  },
  setStore: () => {}
})
