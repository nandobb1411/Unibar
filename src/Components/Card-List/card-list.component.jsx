import React from 'react'
import Card from '../Card/card.component';

import "./card-list.styles.css";

const CardList = ({drinks}) => {


  return (
   <div className='card-list'>
    {drinks.map((drink) =>{
        return <Card drink={drink}/>
    })}
   </div>
  )
  
}

export default CardList;