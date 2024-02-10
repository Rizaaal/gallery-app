import Form from '../Form';
import Card from '../Card';
import { useContext } from 'react';
import { CardContext } from '../../contexts/cardContext';


function Home(): JSX.Element {
  const { cards } = useContext(CardContext);
  console.log('Home rendered');

  return (
    <>
      <h1>Home</h1>
      <Form />
      <section id='cards'>
        {Object.keys(cards).map(id => (
            <Card 
              title={cards[id].title}
              url={cards[id].url}
              id={id}
              favourite={cards[id].favourite}
              page={'home'}
            />
        ))}
      </section>
    </>
  );
}

export default Home;
