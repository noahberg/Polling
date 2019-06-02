import styled from 'styled-components';

export default styled.div`
    grid-column-start: first;
    grid-column-end: span 2;
    grid-row-start: row1;
    grid-row-end: span 1;
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 1.2rem;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`