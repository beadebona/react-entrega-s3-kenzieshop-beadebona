import styled from "styled-components";

const StyledCard = styled.div`
width: ${(props)=>props.cartSize? "100%":"280px"};;
margin: 10px 5px;
color: var(--primary);
display: flex;
flex-direction:${(props)=>props.cartSize? "row":"column"};
justify-content: space-around;
align-items: ${(props)=>props.cartSize? "center":"normal"};

figure{
    width: ${(props)=>props.cartSize? "60px":"200px"};
    height: ${(props)=>props.cartSize? "60px":"200px"};
}
h3{
    max-width: 30ch;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: var(--primary)
}
h3:hover{
    text-decoration: underline;
    cursor: pointer;
}

img{
    max-width: ${(props)=>props.cartSize? "60px":"200px"};
    max-height: ${(props)=>props.cartSize? "60px":"200px"};
}
svg{
    color: var(--primary)
}
div{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
p + p{
    margin: 10px;
}

`

export default StyledCard