import styled from "styled-components";

// const StyledButton = styled.button`

// `

function Button({ children, onClick }: TextLabel): JSX.Element {
    return (
        <button onClick={onClick}>{children ? children : "Click"}</button>
    );
}

export default Button;