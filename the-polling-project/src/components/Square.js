import styled from "styled-components";

export default styled.button`
    border-radius: .8vw;
    border-width: .2vw;
    border-color: ${props => (props.butn ? "white" : "transparent")};
    background-color: transparent;
    cursor: pointer;

`;