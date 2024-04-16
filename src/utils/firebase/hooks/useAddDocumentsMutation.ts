import { type User } from 'firebase/auth'
import { type DocumentData, type DocumentReference } from 'firebase/firestore'
import { useMutation, type UseMutationResult } from 'react-query'

import { type IPokemon } from '../../api/requests/pokemon/id/types'
import { addDocument } from '../requests/addDocument'
import { type Collection } from '..'

interface IAddDocumentPokemonsMutation {
  collectionName: Extract<Collection, 'pokemons'>
  data: {
    pokemonID: IPokemon['id']
    pokemonName: IPokemon['name']
    uid: User['uid'] | undefined
  }
  close: () => void
}

type IAddDocumentsMutation = IAddDocumentPokemonsMutation

export const useAddDocumentsMutation = (): UseMutationResult<
  DocumentReference<any, DocumentData>,
  unknown,
  IAddDocumentsMutation,
  unknown
> => {
  return useMutation(['addDocument'], async (params: IAddDocumentsMutation) => {
    const result = await addDocument(params.collectionName, params.data)
    params.close()
    return result
  })
}
