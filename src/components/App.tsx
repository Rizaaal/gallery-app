import { useState } from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import styled from 'styled-components';

export const Main = styled.main`
  & h1 {
    flex-grow: 2;
  }

  & #cards {
    border: solid 1px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

function App() {
  console.log('App rendered');
  const [page, setPage] = useState<string>('home');
  const [cards, setCards] = useState<CardCollection>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );

  return (
    <Main>
      <NavBar setPage={ setPage } page={ page } setCards={setCards}/>
      { page == 'home' && <Home cards={cards} setCards={setCards} /> }
      { page == 'favs' && <Favourites cards={cards} setCards={setCards}/> }
    </Main>
  );
}

export default App;
