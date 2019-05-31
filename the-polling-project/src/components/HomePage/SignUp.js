import styled from "styled-components";

export default styled.div`
    z-index: 5;
    position: relative;
    background-image: linear-gradient(#3151D6 4vh, white 30vw);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12);
    font-family: ${props => props.theme.font};
    top: -7.8vh;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 15vw;
    height: 7vh;
    @media (max-width: 768px) {
        width: 12vw;
        height: 6vh;
        font-size: 0.8rem;
        letter-spacing: 0.05vw;
        top: -5.5vh;
    }
    display: flex;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    text-align: center;
    border-radius: .6em;
    border-width: .2em;
    padding: 1.2em;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.15vw;
`;