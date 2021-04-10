import { useState, useEffect } from 'react'

import Card from './Card'

import { request } from '../utils/api'

const CardList = () => {
  const [characters, setCharacters] = useState([])
  const [count, setCount] = useState(0)

  const getCharacters = async () => {
    const data = await request('https://rickandmortyapi.com/api/character/')
    setCharacters(data.results)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      <button onClick={() => { setCount(count+1)}}>Add</button>
      <Card count={count} />
      <ul>
        {
          characters.map(character => (
            <Card key={character.id} {...character} />
          ))
        }
      </ul>
      <div>
        1 2 3 4 5
      </div>
    </div>
  )
}

export default CardList
