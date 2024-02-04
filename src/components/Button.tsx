import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    padding: .5em;

    &:hover {
        cursor: pointer;
        background: #999;
    }
`

function Button(props: ButtonProps): JSX.Element {
    return (
        <StyledButton onClick={props.onClick}>
            {props.children ? props.children : "Click"}
        </StyledButton>
    );
}

export default Button;