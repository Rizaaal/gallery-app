import { Dispatch, SetStateAction, useContext } from "react";
import { CardContext } from "../contexts/cardContext";
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
    props: { setPage: Dispatch<SetStateAction<string>> }
): JSX.Element {

    console.log('NavBar rendered');
    const { setCards } = useContext(CardContext);

    return (
        <StyledNavbar>
            <li onClick={() => {
                props.setPage('home');
                setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Home</li>
            <li onClick={() => {
                props.setPage('favs');
                setCards(JSON.parse(localStorage.getItem("cards") || "{}"));
            }}>Preferiti</li>
        </StyledNavbar>
    );
}

export default NavBar