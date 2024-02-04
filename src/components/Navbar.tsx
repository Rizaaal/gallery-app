import { Dispatch, SetStateAction } from "react";
import styled from "styled-components"

const StyledNavbar = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: #555;
    margin: 0;

    & li {
        border: solid 1px white;

        &:hover {
            cursor: pointer;
        }
    }
`;

function NavBar(
    props: { 
        page: string,
        setPage: Dispatch<SetStateAction<string>>
        setCards: Dispatch<SetStateAction<{[key: string]: Card}>>
    }): JSX.Element {

    return (
        <StyledNavbar>
            <li onClick={() => {
                props.setPage('home');
                props.setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Home</li>
            <li onClick={() => {
                props.setPage('favourites');
                props.setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Preferiti</li>
        </StyledNavbar>
    );
}

export default NavBar