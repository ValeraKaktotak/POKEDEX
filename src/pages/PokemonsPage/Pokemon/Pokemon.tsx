import type { FC } from 'react'

import type { IPokemon } from '../../../utils/api/requests/pokemon/id/types'

interface IPokemonProps {
  pokemonInfo?: IPokemon
}

const Pokemon: FC<any> = ({ pokemonInfo }) => {
  console.log(typeof pokemonInfo)

  if (!pokemonInfo) {
    // Обработка случая, когда данные еще не загружены
    return <div>Loading...</div>
  }
  return (
    // <Link
    //   to={`/pokemon/${pokemonInfo.id}`}
    //   className=' flex items-center flex-col justify-center shadow p-3'
    // >
    //   <div className='w-24 h-24'>
    //     <img
    //       className='w-full'
    //       src={pokemonInfo.sprites.front_default}
    //       alt='pokemon-img'
    //     />
    //   </div>
    //   <div>
    //     <h2 className='w-full text-left capitalize font-semibold text-2xl'>
    //       {pokemonInfo.name}
    //     </h2>
    //   </div>
    // </Link>
    <div>{pokemonInfo}</div>
  )
}

export default Pokemon
