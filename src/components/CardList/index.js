import React, { Component } from 'react';
import Card from '../Card';

import './cardList.scss';

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      cards: [],
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json()).then(cards => this.setState({ cards }));
  }
  render() {
    const { cards } = this.state;
    const threeCards = cards.slice(0, 3);
    return (
      <div className="CardList">
        { threeCards.map((card) => {
          return <Card key={card.id} item={card}/>
        })}
      </div>
    )
  }
}

export default CardList;
