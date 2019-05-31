import styled from "styled-components";

export default styled.div`
    width: 80%;
    position: relative;
    align-self: center;
    justify-self: center;
    font-family: "Avenir Next";
    top: 2vh;
    color: white;
    padding-top: 3vh;
    flex-basis: ${props => (props.primary ? "80%" : "35%")};
    @media (max-width: 768px) {
        flex-basis: 80%;
        top: 1vh;
    }
`