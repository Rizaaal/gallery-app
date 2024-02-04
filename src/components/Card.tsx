import { useState } from "react";
import { setFav } from "../StorageFunctions";
import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.section<{ page: string }>`
  background-color: #ccc;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  height: ${({page}) => page == 'favs' ? '350px' : 'revert'};

  & img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  & h2 {
    width: 100%;
    margin: 10px 0 0 10px;
    height: 70px;
  }

  & button {
    align-self: flex-end;
  }
`
function Card(props: Card & {page?: string}): JSX.Element {
  const [currentFav, setFavourite] = useState<boolean | undefined>(props.favourite);

  console.log('Card rendered', props.page);
  return(
    <StyledCard page={props.page as string}>
      <img src={props.url} alt="immagine inesitente" />
      <h2>{props.title}</h2>
      {props.page == 'home' ? 
      <Button onClick={() => {
        setFav(props.id as string);
        setFavourite(!currentFav);
      }}>{currentFav ? '➖' : '➕'}</Button>
      : null}
    </StyledCard>
  )
};

export default Card;