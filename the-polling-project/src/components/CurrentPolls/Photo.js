import styled from 'styled-components';
import photo from './photo.jpg';

export default styled.div`
    border-radius: 2vw 0 0 0;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-size: cover;
    grid-column-start: first;
    grid-column-end: line2;
    grid-row-start: row1;
    grid-row-end: row2;
`