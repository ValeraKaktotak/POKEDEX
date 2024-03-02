export const setCookie = (
  cookieName: string,
  cookieValue: string | number | boolean | null,
  hourToExpire: number
): void => {
  const date = new Date()
  date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000)
  document.cookie =
    cookieName + ' = ' + cookieValue + '; expires = ' + date.toString()
}
