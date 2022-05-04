import StyledCard from "./style";
import { IconButton } from "@mui/material";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useHistory } from "react-router-dom";
import { addToCartThunks, removeFromCartThunks } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";

const ProductCard = ({product, cartSize}) => {

    const history = useHistory() 
    const dispatch = useDispatch()
    const cartPrice = product.quantity * product.price

    return(
        <StyledCard key={product.id} cartSize={cartSize} >
            <figure onClick={()=>history.push(`product/${product.id}`)}>
                <img src={product.image} alt={product.title}/>
            </figure>
            <h3 onClick={()=>history.push(`product/${product.id}`)} >{product.title}</h3>
            <div>
                {!!cartSize?(
                <>
                <p> {product.quantity}und </p>
                <p>R$ {cartPrice.toFixed(2)}</p>
                <IconButton key={product.id} onClick={()=> dispatch(removeFromCartThunks(product)) } >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
                </>
                ):(        
                <> 
                <span>R$ {product.price.toFixed(2)}</span>      
                <IconButton key={product.id} onClick={()=> dispatch(addToCartThunks(product)) } >
                    <AddShoppingCartOutlinedIcon/>
                </IconButton>
                </> 
                )}

            </div>
        </StyledCard>
    )
}

export default ProductCard