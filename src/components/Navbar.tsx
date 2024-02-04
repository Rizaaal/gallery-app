import { Dispatch, SetStateAction } from "react";
import styled from "styled-components"

const StyledNavbar = styled.ul`
    display: flex;
    background-color: #555;
    margin: 0;
    padding: 1em;

    & li {
        background: white;
        padding: .5em;
        margin-right: .5em;

        &:hover {
            cursor: pointer;
            background: #999;
        }
    }
`;

function NavBar(
    props: { 
        page: string,
        setPage: Dispatch<SetStateAction<string>>
        setCards: Dispatch<SetStateAction<CardCollection>>
    }): JSX.Element {

    return (
        <StyledNavbar>
            <li onClick={() => {
                props.setPage('home');
                props.setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Home</li>
            <li onClick={() => {
                props.setPage('favs');
                props.setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Preferiti</li>
        </StyledNavbar>
    );
}

export default NavBar