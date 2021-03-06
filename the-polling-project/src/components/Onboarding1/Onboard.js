import styled from "styled-components";

export default styled.div`
    background-image: linear-gradient(#3151D6 30vh, white 500vw);
    position: absolute;
    width: 60vw;
    height: 85vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 2vw;
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
    @media (max-width: 768px) {
        width: 85vw;
        height: 75vh;
    }
`