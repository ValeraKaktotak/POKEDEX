import type { FC } from 'react'

import type { IPokemonPage } from '../../../utils/api/hooks/pokemon/types'

interface IPokemonProps {
  pokemonInfo?: IPokemonPage
}

const Pokemon: FC<IPokemonProps> = ({ pokemonInfo }) => {
  if (!pokemonInfo) {
    // Обработка случая, когда данные еще не загружены
    return <div>Loading...</div>
  }
  return (
    <div className=' flex items-center flex-col justify-center shadow p-3'>
      <div className='w-24 h-24'>
        <img
          className='w-full'
          src={pokemonInfo.sprites.front_default}
          alt='pokemon-img'
        />
      </div>
      <div>
        <h2 className='w-full text-left capitalize font-semibold text-2xl'>
          {pokemonInfo.name}
        </h2>
      </div>
    </div>
  )
}

export default Pokemon
