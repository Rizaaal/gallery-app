import { createContext, useState, Dispatch, SetStateAction } from "react";

interface Props {
  cards: CardCollection
  setCards: Dispatch<SetStateAction<CardCollection>>
}

export const CardContext = createContext<Props>({
  cards: {},
  setCards: () => {}
});

export function CardProvider ({ children }: {children: JSX.Element}){
  console.log('CardProvider');
  const [cards, setCards] = useState<CardCollection>(
    JSON.parse(localStorage.getItem("cards") || "{}")
  );

  return (
    <CardContext.Provider value={{cards, setCards}}>
      {children}
    </CardContext.Provider>
  );
};