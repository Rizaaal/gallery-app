import { useEffect, useState } from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import styled from 'styled-components';

export const Main = styled.main`
  & h1 {
    font-size: 3em;
    margin-left: 1em
  }

  & #cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: center;
    padding: 10px;
  }
`

function App() {
  const [page, setPage] = useState<string>('home');
  const [cards, setCards] = useState<CardCollection>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );

  // per ricaricare alla pagina corrente. Copiato da internet!
  useEffect(() => {
    setPage(localStorage.getItem("page") as string);
  }, []);

  useEffect(() => {
    localStorage.setItem("page", page)
  }, [page])
    
  console.log('App rendered, ', page);
  return (
    <Main>
      <NavBar setPage={ setPage } page={ page } setCards={setCards}/>
      { page == 'home' && <Home cards={cards} setCards={setCards} /> }
      { page == 'favs' && <Favourites cards={cards} setCards={setCards}/> }
    </Main>
  );
}

export default App;
