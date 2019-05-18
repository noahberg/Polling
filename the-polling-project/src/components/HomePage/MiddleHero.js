import styled from 'styled-components';

export default styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: center;
    text-align: center;
    position: relative;
    top: 30vh;
    padding-left: 14vw;
    padding-right: 14vw;
    margin-left: auto;
    margin-right: auto;
    font-size: 4vw 4vh;
    font-family: ${props => props.theme.font};
    font-weight: 700;
    color: black;
` 