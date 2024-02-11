import { MutableRefObject, useContext, useRef } from "react";
import { insertNewCard } from "../StorageFunctions";
import styled from "styled-components";
import Button from "./Button";
import { CardContext } from "../contexts/cardContext";

const StyledForm = styled.section`
    display: flex;
    flex-grow: 1;
    padding: 16px 0;
    margin-left: 1em;

    & * {
      align-self: center;
      margin-right: 8px;
      height: 30px;
      border: solid 1px;
    }

    & input {
      padding-left: 8px;
    }
`

function Form(): JSX.Element {
  const { setCards } = useContext(CardContext);
  const titleRef: MutableRefObject<HTMLInputElement | null> = 
  useRef<HTMLInputElement | null>(null);
  const urlRef: MutableRefObject<HTMLInputElement | null> = 
  useRef<HTMLInputElement | null>(null);

  return(
    <StyledForm>
      <input type="text" ref={titleRef} placeholder="Title"/>
      <input type="text" ref={urlRef} placeholder="Url"/>
      <Button onClick={() => {
        //teniamo logica storage e view separate
        insertNewCard(urlRef.current?.value, titleRef.current?.value);
        setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
      }}>Add Image</Button>
    </StyledForm>
  )
};

export default Form;