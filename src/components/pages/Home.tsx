import { Dispatch, SetStateAction } from 'react';
import Form from '../Form';
import Card from '../Card';


function Home(
  props: {
    cards: CardCollection,
    setCards: Dispatch<SetStateAction<CardCollection>>
  }): JSX.Element {

  console.log('Home rendered');

  return (
    <>
      <h1>Home</h1>
      <Form setCards={props.setCards}/>
      <section id='cards'>
        {Object.keys(props.cards).map(id => (
            <Card 
              title={props.cards[id].title}
              url={props.cards[id].url}
              id={id}
              favourite={props.cards[id].favourite}
              page={'home'}
            />
        ))}
      </section>
    </>
  );
}

export default Home;
