import Card from '../Card';
import { Main } from '../App';
import { useContext } from 'react';
import { CardContext } from '../../contexts/cardContext';

function Favourites(): JSX.Element {
  console.log('Favourites rendered');
  const { cards } = useContext(CardContext);

  return (
    <Main>
      <h1>Favourites</h1>
      <section id="cards">
        {Object.keys(cards).map(id => {
          if (cards[id].favourite) {
            return (
            <Card 
              title={cards[id].title} 
              url={cards[id].url}
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
