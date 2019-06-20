import React from 'react'
import './cardImage.scss';

const CardImage = (props) => {
  const { image } = props;
  return (
    <img
      src={image}
      className="CardImage"
    />
  )
}

export default CardImage
