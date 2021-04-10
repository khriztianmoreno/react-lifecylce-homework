import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, name } = props

  useEffect(() => {
    console.log('Hola')
  })

  return (
    <li>
      <Link to={`/${id}`}><p>{name}</p></Link>
    </li>
  )
}

export default React.memo(Card)
