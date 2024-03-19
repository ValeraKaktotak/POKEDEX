import { useMutation, type UseMutationResult } from 'react-query'

import { type User } from 'firebase/auth'
import { type DocumentData, type DocumentReference } from 'firebase/firestore'
import { type Collection } from '..'
import { type IPokemon } from '../../api/requests/pokemon/id/types'
import { addDocument } from '../requests/addDocument'

interface IAddDocumentPokemonsMutation {
  collectionName: Extract<Collection, 'pokemons'>
  data: IPokemon & { uid: User['uid'] | undefined }
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
    return result
  })
}
