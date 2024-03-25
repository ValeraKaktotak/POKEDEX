import { onSnapshot, type Query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useCollection = <T>(query: Query<T>): any => {
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    const unsub = onSnapshot(query, (querySnapshot) => {
      const pokemons: any = []
      querySnapshot.forEach((doc) => {
        pokemons.push(doc.data())
      })
      // console.log('Current data: ', pokemons)
      setData(data)
    })
    return () => {
      unsub()
    }
  }, [])

  return { data }
}
