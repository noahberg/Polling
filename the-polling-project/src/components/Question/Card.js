import styled from "styled-components";

export default styled.div`
    display: grid;
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
    border-radius: 2vw;
    top: 9vh;
    position: relative;
    grid-template-columns: [first] 30% [line2] 30% [line3] 20% [line4] 20%;
    grid-template-rows: [row1] 30% [row2] 15% [row3] 15% [row4] 15% [row5] 25%;
    background-color: white;
    width: 70vw;
    height: 70vh;
    @media (max-width: 768px) {
        width: 90vw;
        height: 80vh;
        top: 4.5vh;
    }
`;