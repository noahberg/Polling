import styled from "styled-components";

export default styled.div`
    font-family: ${props => (props.primary ? "Gill Sans" : "Marion")};
    font-size: ${props => (props.primary ? "1rem" : "1.8rem")};
    padding: ${props => (props.primary ? "-0.4vh 0vh" : "1vh 0vh")};
    line-height: ${props => (props.primary ? "0vh" : "6vh")};
    font-weight: ${props => (props.primary ? "regular" : "bold")};
    color: white;
    align-self: ${props => (props.primary ? "center" : "left")};
    justify-self: ${props => (props.primary ? "center" : "left")};
`;