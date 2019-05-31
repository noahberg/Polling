import styled from "styled-components";

export default styled.div`
    position: relative;
    display: flex;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.12);
    font-family: ${props => props.theme.font};
    font-weight: 600;
    top: 5vh;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 70vw;
    height: 40vh;
    min-width: 200px;
    min-height:200px;
    flex-basis: ${props => (props.primary ? "80%" : "35%")};
    display: flex;
    text-align: center;
    border-radius: .1em;
    border-width: .2em;
    padding: 1.8em;
    font-size: 1.2vw 1.2vh;
    font-weight: 700;
    letter-spacing: 0.15vw;
`;