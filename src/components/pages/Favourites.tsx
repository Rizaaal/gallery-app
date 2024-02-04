import { Dispatch, SetStateAction } from 'react';
import Card from '../Card';
import { Main } from '../App';

function Favourites(
  props: {
    cards: CardCollection,
    setCards: Dispatch<SetStateAction<CardCollection>>
  }): JSX.Element {

  console.log('Favourites rendered');

  return (
    <Main>
      <h1>Favourites</h1>
      <section id="cards">
        {Object.keys(props.cards).map(id => {
          if (props.cards[id].favourite) {
            return (
            <Card 
              title={props.cards[id].title} 
              url={props.cards[id].url}
              id={id}
              page={'favs'}
            />
          )}
        })}
      </section>
    </Main>
  );
}

export default Favourites;
