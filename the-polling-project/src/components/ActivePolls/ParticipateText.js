import styled from 'styled-components';

export default styled.h3`
    display: flex;
    justify-content: center;
    flex-direction: center;
    text-align: center;
    position: relative;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14vw;
    padding-right: 14vw;
    bottom: 5;
    font-size: 1em;
    font-family: ${props => props.theme.font};
    font-weight: 500;
    letter-spacing: 0.08vw; 
    color: black;
`