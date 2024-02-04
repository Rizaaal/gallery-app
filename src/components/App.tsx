import { useState } from 'react';

function App() {
  console.log('App rendered');
  const [cards, setCards] = useState<{[key: string]: Card}>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );
  return (
    <h1>Galleria</h1>
  );
}

export default App;
