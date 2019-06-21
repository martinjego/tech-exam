import React from 'react'
import CardImage from '../CardImage';
import CardEngagement from '../CardEngagement';
import './card.scss';

const Card = (props) => {
  const { item: { url, thumbnailUrl, title }, item } = props;
  return (
    <div className="Card">
      <div className="BoxContainer">
        <CardImage image={url}/>
        <CardEngagement />
      </div>
      <div className="UserContainer">
        <img src={thumbnailUrl} alt={title}/>
        {item.title}
      </div>
    </div>
  )
}

export default Card
