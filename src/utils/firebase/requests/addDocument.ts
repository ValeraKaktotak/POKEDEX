import {
  addDoc,
  collection,
  type DocumentData,
  type DocumentReference,
  type WithFieldValue
} from 'firebase/firestore'

import { db } from '..'

// Add a new document with a generated id.
export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T
): Promise<DocumentReference<any, DocumentData>> => {
  return await addDoc(collection(db, collectionName), data)
}
