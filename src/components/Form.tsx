import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";
import { insertNewCard } from "../StorageFunctions";
import styled from "styled-components";
import Button from "./Button";

const StyledForm = styled.section`
    border: solid 1px white;
`

function Form(

props: {
    cards: {[key: string]: Card}, 
    setCards: Dispatch<SetStateAction<{[key: string]: Card}>>
}

): JSX.Element {
    const titleRef: MutableRefObject<HTMLInputElement | null> = 
    useRef<HTMLInputElement | null>(null);
    const urlRef: MutableRefObject<HTMLInputElement | null> = 
    useRef<HTMLInputElement | null>(null);

    return(
        <StyledForm>
            <input type="text" ref={titleRef} placeholder="title"/>
            <input type="text" ref={urlRef} placeholder="url"/>
            <Button onClick={() => {
                insertNewCard(urlRef.current?.value, titleRef.current?.value);
                props.setCards(
                    JSON.parse(localStorage.getItem("cards") || "{}")
                );
            }}>add image</Button>
        </StyledForm>
    )
};

export default Form;