import styled from "styled-components";

export default styled.div`
    grid-row-gap: 5vh;
    grid-column-gap: 2vw;
    display: grid;
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    grid-template-columns: [col1] 1fr [col2] 1fr [col3] 1fr [col4] 1fr [col5] 1fr [col1] 1fr;
    grid-template-rows: [row1] 70% [row2] 45% [row3] 60%;
`