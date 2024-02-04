import { Dispatch, SetStateAction } from 'react';
import Form from './Form';
import Card from './Card';

function Home(
    props: {
        cards: {[key: string]: Card}, 
        page: string
        setCards: Dispatch<SetStateAction<{[key: string]: Card}>>
    }): JSX.Element {

    console.log('Home rendered');

  return (<>

      <h1>Home</h1>
      <Form cards={props.cards} setCards={props.setCards}/>
      {
        Object.keys(props.cards).map(id => (

          <Card 
            title={props.cards[id].title}
            url={props.cards[id].url}
            id={id}
            favourite={props.cards[id].favourite}
            page={props.page}
          />

        ))
      }

  </>);
}

export default Home;
