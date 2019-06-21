import React from 'react';
import './cardEngagement.scss';

const CardEngagment = (props) => {
  return (
    <div className="CardEngagement">
      <div className="Share">
        <i className="share-icon fas fa-reply fa-xs"></i>
      </div>
      <div className="Stats">
        <div className="StatsItem">
          <i className="icon far fa-eye fa-xs"></i>
          1000
        </div>
        <div className="StatsItem">
          <i className="icon fas fa-comment fa-xs"></i>
          1000
        </div>
        <div className="StatsItem">
          <i className="icon fas fa-heart fa-xs"></i>
          1000
        </div>
      </div>
    </div>
  )
}

export default CardEngagment;
