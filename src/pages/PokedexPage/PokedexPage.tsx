import type { FC } from 'react'

import styles from './PokedexPage.module.css'

interface IPokedexPage {
  data?: number
}

const PokedexPage: FC<IPokedexPage> = () => {
  return <div className={styles.page_container}>PokedexPage</div>
}

export default PokedexPage
