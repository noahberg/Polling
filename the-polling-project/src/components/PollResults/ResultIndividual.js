import styled from "styled-components";

export default styled.div`
    padding-left: 2em;
    padding-right: 2em;
    align-self: center;
    justify-self: center;
    font-family: "Avenir Next";
    font-size: 0.85rem;
    font-weight: 700;
    flex-basis: 30%;
    @media (max-width: 1224px) {
        font-size: 0.7rem;
        flex-basis: 25%;
    }

    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
`