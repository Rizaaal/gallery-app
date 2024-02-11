import { useEffect, useState } from 'react';
import { CardProvider } from '../contexts/cardContext';
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

  // per ricaricare alla pagina corrente. Copiato da internet!
  useEffect(() => {
    localStorage.setItem("page", page)
  }, [page])
  
  useEffect(() => {
    setPage(localStorage.getItem("page") as string);
  }, []);

    
  console.log('App rendered');
  return (
    <CardProvider>
      <Main>
        <NavBar setPage={setPage}/>
        { page == 'home' && <Home /> }
        { page == 'favs' && <Favourites /> }
      </Main>
    </CardProvider>
  );
}

export default App;
