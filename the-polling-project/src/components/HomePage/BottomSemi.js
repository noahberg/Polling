import styled from 'styled-components';

export default styled.div`
    position: relative;
    background-image: radial-gradient(#D63131 -1vh, white 1000vw);
    box-shadow: 0 0 20px 0 rgba(82, 95, 110, 0.3);
    height: 75vh;
    @media (max-width: 768px) {
        height: 230vh;
        border-radius: 40% 40% 40% 40% / 5% 5% 0% 0%;
    }
    width: 100%;
    border-radius: 40% 40% 40% 40% / 15% 15% 0% 0%;
    top: 90vh;
`