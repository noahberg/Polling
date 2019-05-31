import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`  