import React from 'react'
import "./card.styles.css"

const Card = ({drink}) => {

    const{id,description,name,imageLink,graduacaoAlcoolica} = drink;

  return (
    <div className='drink-container' key={id}>
        <img src={imageLink} alt={`foto da bebida ${name}`}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{graduacaoAlcoolica}</p>
    </div>
  )
}

export default Card;