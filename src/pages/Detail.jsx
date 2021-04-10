import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { request } from '../utils/api'

const Detail = () => {
  const [character, setCharacter] = useState(null)
  const { id } = useParams()

  const getCharacter = async () => {
    const data = await request(`https://rickandmortyapi.com/api/character/${id}`)
    setCharacter(data)
  }

  useEffect(() => {
    getCharacter()
  }, [id])

  return (
    <div>
      <p><Link to="/">Home</Link></p>
       {
        character
        ? (
          <div>
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} />
          </div>
        ) : null
      }
    </div>
  )
}

export default Detail
