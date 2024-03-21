import { useContext, type FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/pokemon_logo.png'

import { StoreContext } from '../../../utils/context/store'
import styles from './Header.module.css'

export const Header: FC = () => {
  const { store } = useContext(StoreContext)
  console.log('hello', store.userProfile?.displayName)

  return (
    <div className={styles.header_container}>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className={styles.header_menu}>
        <Link to='/'>Pokemons Page</Link>
        <Link to='/pokedex'>Pokedex Page</Link>
        <Link to='/profile'>Profile Page</Link>
        <Link to='/auth'>Log in</Link>
      </div>
    </div>
  )
}
