import styled from 'styled-components';

export default styled.div`
    grid-column-start: first;
    grid-column-end: span line2;
    grid-row-start: row2;
    grid-row-end: span row2;
    font-family: "Avenir Next";
    font-weight: 700;
    font-size: 1.2rem;
    padding-left: 1em;
    padding-top: 1em;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`