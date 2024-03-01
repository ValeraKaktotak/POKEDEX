import { setCookie } from './setCookie.ts'
export const deleteCookie = (name: string): void => {
  setCookie(name, 'del', -100)
}
