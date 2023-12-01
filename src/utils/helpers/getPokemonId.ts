export const getPokemonId = (id: number): string => {
  const str = id.toString()
  const countOfZeroNumbers = (id / 1000 >= 1 ? 4 : 3) - str.length

  return `#${'0'.repeat(countOfZeroNumbers)}${id}`
}
