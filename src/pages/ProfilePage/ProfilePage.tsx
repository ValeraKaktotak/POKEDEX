import { collection, query, where } from 'firebase/firestore'
import { useContext, type FC } from 'react'
import { Button } from '../../common/buttons/Button/Button'
import { StoreContext } from '../../utils/context/store'
import { db } from '../../utils/firebase'
import { useCollection } from '../../utils/firebase/hooks/useCollection'
import { useUserLogOutMutation } from '../../utils/firebase/hooks/useUserLogOutMutation'
import styles from './ProfilePage.module.css'

export const ProfilePage: FC = () => {
  const { store } = useContext(StoreContext)
  const { mutate } = useUserLogOutMutation()
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
        <Button onClick={mutate}>Log Out</Button>
      </div>
    </>
  )
}
