import { useState } from 'react';
import NavBar from './Navbar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {
  console.log('App rendered');
  const [page, setPage] = useState<string>('home');
  const [cards, setCards] = useState<CardCollection>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );

  return (
    <>
      <NavBar setPage={ setPage } page={ page } setCards={setCards}/>
      { page == 'home' && <Home cards={cards} setCards={setCards} /> }
      { page == 'favs' && <Favourites cards={cards} setCards={setCards}/> }
    </>
  );
}

export default App;
