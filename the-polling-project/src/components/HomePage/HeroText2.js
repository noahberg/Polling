import styled from 'styled-components';

export default styled.h3`
    display: flex;
    justify-content: center;
    flex-direction: center;
    text-align: center;
    position: relative;
    top: 10vh;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14vw;
    padding-right: 14vw;
    font-size: 1em;
    font-family: ${props => props.theme.font};
    font-weight: 400;
    letter-spacing: 0.08vw; 
    color: white;
`