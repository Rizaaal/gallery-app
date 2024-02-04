import { Dispatch, SetStateAction } from 'react';
import Card from '../Card';

function Favourites(
  props: {
    cards: {[key: string]: Card},
    page: string,
    setCards: Dispatch<SetStateAction<{[key: string]: Card}>>
  }): JSX.Element {

  console.log('Favourites rendered');

  return (
    <><h1>Favourites</h1>
    {Object.keys(props.cards).map(id => {
      if (props.cards[id].favourite) {
        return (<Card 
          title={props.cards[id].title} 
          url={props.cards[id].url}
          id={id}
          page={props.page}
        />)}
    })}</>
  );
}

export default Favourites;
