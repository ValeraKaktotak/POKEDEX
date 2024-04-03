import { onSnapshot, type Query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

// export interface ITeamMember {
//   pokemonID: IPokemon['id']
//   pokemonName: IPokemon['name']
//   uid: User['uid'] | undefined
// }

export const useCollection = <T>(query: Query<T>): any => {
  const [data, setData] = useState<T[] | null>(null)

  useEffect(() => {
    const unsub = onSnapshot(query, (querySnapshot) => {
      const pokemons: T[] = []
      querySnapshot.forEach((doc) => {
        pokemons.push(doc.data())
      })
      setData(pokemons)
    })
    return () => {
      unsub()
    }
  }, [])

  return data
}
