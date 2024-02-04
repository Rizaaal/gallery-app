import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

function setFav(id: string): void{
  const cards = JSON.parse(localStorage.getItem("cards") || "{}");
  localStorage.setItem("cards", JSON.stringify(
    {...cards, 
      [id]: {
        ...cards[id],
        favourite: !cards[id].favourite
      }
    }
  ));
};

const StyledCard = styled.section`
  background-color: #ccc;
  margin: 1em;

  & img {
    width: 100%;
  }
`
function Card(props: Card & {page?: string}): JSX.Element {
  const [currentFav, setFavourite] = useState<boolean | undefined>(props.favourite);

  console.log('Card rendered', props.page);
  return(
    <StyledCard>
      <img src={props.url} alt="immagine inesitente" />
      <h2>{props.title}</h2>
      {props.page == 'home' ? 
      <Button onClick={() => {
        setFav(props.id as string);
        setFavourite(!currentFav);
      }}>{currentFav ? '-' : '+'}</Button>
      : null}
    </StyledCard>
  )
};

export default Card;