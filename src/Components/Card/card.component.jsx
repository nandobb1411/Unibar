import React from 'react'
import "./card.styles.css"

const Card = ({drink}) => {

    const{id,description,name,imageLink,graduacaoAlcoolica} = drink;

  return (
    <div className='drink-container' key={id}>
        <h2>{name}</h2>
        <img src={imageLink} alt={`foto da bebida ${name}`}/>
        <p>{description}</p>
        <p>Teor Alcoolico: {graduacaoAlcoolica}</p>
    </div>
  )
}

export default Card;