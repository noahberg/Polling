import styled from "styled-components";

export default styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr [col4] 1fr [col5] 1fr [col6] 1fr;
    grid-template-rows: [row1] 1fr [row2] 1fr [row3] 1fr [row4] 1fr [row5] 1fr [row6] 1fr [row7] 1fr [row8] 1fr [row9] 1fr;
    grid-row-gap: 5vh;
    grid-column-gap: 1vw; 
` 