import styled from 'styled-components';
import trust from './trust.svg';

export default styled.div`
    margin: auto;
    justify-self: center;
    align-items: center;
    background-image: url(${trust});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 5em;
    height: 5em;
    @media (max-width: 768px) {
        width: 8em;
        height: 8em;
        top: 0;
    }
    position: relative;
    top: -10vh;
` 