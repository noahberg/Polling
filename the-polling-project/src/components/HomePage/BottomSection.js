import styled from 'styled-components';

export default styled.div`
    text-align: center;
    color: white;
    font-family: ${props => props.theme.font};
    font-weight: 700;
    position: relative;
    top: 25vh;
    @media (max-width: 768px) {
       padding-top: 10vh;
       top: 0;
    }
    font-size: 1.4rem;
`