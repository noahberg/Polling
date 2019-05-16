import styled from "styled-components";

export default styled.div`
    z-index: 5;
    position: relative;
    background-image: linear-gradient(#3151D6 -3vh, white 30vw);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12);
    font-family: ${props => props.theme.font};
    font-weight: 600;
    top: -5vh;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 15vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    flex-direction: center;
    text-align: center;
    border-radius: .8vw;
    border-width: .2vw;
    padding: 10px;
`;