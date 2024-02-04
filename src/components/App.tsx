import { useState } from 'react';

function App() {
  console.log('App rendered');
  const [cards, setCards] = useState<{[key: string]: Card}>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );
  const [page, setPage] = useState<string>('home');

  return (
    <h1>Galleria</h1>
  );
}

export default App;
