import StyledHeader from "./style";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    return (
        <StyledHeader>
            <h1 onClick={() => history.push("/")} >Kenzie Shop</h1>
            <div>
            <IconButton color="primary" aria-label="cart" onClick={()=> history.push("/cart")}>
                <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="login" onClick={()=> history.push("/login")}>
                <LoginOutlinedIcon />
            </IconButton>
            </div>
        </StyledHeader>
    )
}

export default Header