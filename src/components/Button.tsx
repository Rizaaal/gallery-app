import styled from "styled-components";

// const StyledButton = styled.button`

// `

function Button(props: ButtonProps): JSX.Element {
    return (
        <button onClick={props.onClick}>
            {props.children ? props.children : "Click"}
        </button>
    );
}

export default Button;