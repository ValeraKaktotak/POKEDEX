import { useContext, type FC } from 'react'
import { StoreContext } from '../../utils/context/store'
import styles from './ProfilePage.module.css'

export const ProfilePage: FC = () => {
  const { store } = useContext(StoreContext)
  console.log(store.userProfile)
  const user = store.userProfile

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
