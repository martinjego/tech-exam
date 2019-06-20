import React from 'react'
import CardImage from '../CardImage';
import CardEngagement from '../CardEngagement';
import './card.scss';

const Card = (props) => {
  const { item: { url } } = props;
  return (
    <div className="Card">
      <div className="BoxContainer">
        <CardImage image={url}/>
        <CardEngagement />
      </div>
      <div className="UserContainer">
        User
      </div>
    </div>
  )
}

export default Card
