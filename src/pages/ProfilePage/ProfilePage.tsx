import { collection, query, where } from 'firebase/firestore'
import { useContext, type FC } from 'react'
import { StoreContext } from '../../utils/context/store'
import { db } from '../../utils/firebase'
import { useCollection } from '../../utils/firebase/hooks/useCollection'
import styles from './ProfilePage.module.css'

export const ProfilePage: FC = () => {
  const { store } = useContext(StoreContext)
  console.log(store.userProfile)
  const user = store.userProfile

  const q = query(
    collection(db, 'pokemons'),
    where('uid', '==', store.userProfile?.uid)
  )
  const { data } = useCollection(q)

  return (
    <>
      <div className={styles.profilePage}>
        <h1>ProfilePage</h1>
        <img src={user?.photoURL ?? ''} alt='user photo' />
        <div>Hello {user?.displayName}</div>
      </div>
    </>
  )
}
