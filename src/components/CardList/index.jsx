import React from 'react'
import {Container, ListCard, ImageProduct, InfosProducts, RatingInfo} from './styles'

export default function CardList ({name, description, image, price, rating}){
  //function to convert number to a price in euro format
  function priceToEuro(price){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }
  
  return (
    <Container>
      <ListCard>
        <ImageProduct src={image}/>

        <InfosProducts>
          <h1>{name}</h1>
          <span>{description}</span>
          <h2>Price: {price.toLocaleString('de-DE', {style: "currency", currency: "EUR", minimumFractionDigits: 2})} </h2>
        </InfosProducts>

        <RatingInfo>
          <h1>Rating: {rating}</h1>
        </RatingInfo>
      </ListCard>
    </Container>
  )
}