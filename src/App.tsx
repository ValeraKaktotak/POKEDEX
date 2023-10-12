import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const { data } = useQuery(
    'pokemon',
    async () =>
      await axios
        .get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res: any) => res.data)
  )
  console.log('Data', data)
  return (
    <>
      <div className='bg-amber-300'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
