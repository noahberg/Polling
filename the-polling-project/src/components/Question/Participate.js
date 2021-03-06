import styled from 'styled-components';

export default styled.div`
    position: relative;
    padding-left: 2em;
    padding-right: 2em;
    align-self: center;
    justify-self: center;
    font-family: "Avenir Next";
    font-size: 0.85rem;
    font-weight: 700;
    flex-basis: 30%;
    top: -3vh;
    @media (max-width: 768px) {
        font-size: 0.8rem;
        flex-basis: 25%;
    }
`