import { type User } from 'firebase/auth'
import { collection, query, where } from 'firebase/firestore'
import { type FC,useContext } from 'react'

import { Button } from '../../common/buttons/Button/Button'
import { type IPokemon } from '../../utils/api/requests/pokemon/id/types'
import { StoreContext } from '../../utils/context/store'
import { db } from '../../utils/firebase'
import { useCollection } from '../../utils/firebase/hooks/useCollection'
import { useUserLogOutMutation } from '../../utils/firebase/hooks/useUserLogOutMutation'

import styles from './ProfilePage.module.css'

export interface ITeamMember {
  pokemonID: IPokemon['id']
  pokemonName: IPokemon['name']
  uid: User['uid'] | undefined
}

export const ProfilePage: FC = () => {
  const { store } = useContext(StoreContext)
  const { mutate } = useUserLogOutMutation()
  const user = store.userProfile

  const q = query(
    collection(db, 'pokemons'),
    where('uid', '==', store.userProfile?.uid)
  )

  const data: ITeamMember[] | null = useCollection(q)
  console.log(data)

  return (
    <>
      <div className={styles.profilePage}>
        <h1>ProfilePage</h1>
        <img src={user?.photoURL ?? ''} alt='user photo' />
        <div>Hello {user?.displayName}</div>
        <Button onClick={mutate}>Log Out</Button>
        <div>
          <h2>My Team</h2>
          {data
            ? data.map((member) => (
                <div key={member?.pokemonID}>{member?.pokemonName}</div>
              ))
            : ''}
        </div>
      </div>
    </>
  )
}
