import styled from 'styled-components';

export default styled.button`
    background-image: radial-gradient(#D63131 -1vh, white 1000vw);
    color: white;
    grid-column-start: line2;
    grid-column-end: span 1;
    grid-row-start: row2;
    grid-row-end: span 1;
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 2rem;
    align-self: stretch;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`
