import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    border-bottom: 2px solid var(--primary);
    color: var(--primary);

    h1{
        cursor: pointer;
    }

    svg{
        color: var(--primary);
    }


    @media (min-width: 350px){
        flex-direction: row;
    }
`

export default StyledHeader