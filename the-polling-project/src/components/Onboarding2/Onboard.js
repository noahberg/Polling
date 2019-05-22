import styled from "styled-components";

export default styled.div`
    background-image: ${props => (props.primary ? "linear-gradient(#3151D6 30vh, white 500vw);" : "linear-gradient(#E7ECED 30vh, white 500vw);")};
    width: ${props => (props.primary ? "60.42vw" : "26vw")};
    height: ${props => (props.primary ? "64vh" : "64vh")};
    display: flex;
    text-align: center;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 2vw;
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
`