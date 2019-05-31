import styled from 'styled-components';

export default styled.div`
    grid-column-start: line2;
    grid-column-end: span 2;
    grid-row-start: row1;
    grid-row-end: row2;
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 2.8rem;
    align-self: center;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`