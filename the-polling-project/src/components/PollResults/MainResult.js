import styled from "styled-components";

export default styled.div`
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
    border-radius: 2vw;
    top: 9vh;
    position: relative;
    background-color: white;
    grid-column-start: col1;
    grid-column-end: span col6;
    grid-row-start: row1;
    grid-row-end: span row1;
    @media (max-width: 768px) {
        width: 90vw;
        height: 80vh;
        top: 4.5vh;
    }
    
`;