import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { checkoutThunks } from "../../store/modules/cart/thunks";
import Container from "./style";

const CheckOut = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const checkOutPrice = cart.reduce((vAn, vAt)=>{
        return vAn + Number(vAt.price * vAt.quantity)       
    },0) 
    const checkOutQuantity = cart.reduce((vAn, vAt)=>{
        return vAn + Number(vAt.quantity)       
    },0) 


    return (
        <Container>
            {cart.length > 0?(
                <>
                    <h1> Resumo do Pedido </h1>
                    <p>
                        {checkOutQuantity} und
                    </p>
                    <p>
                    R$ {checkOutPrice.toFixed(2)}
                    </p>
                    <Button variant="contained" onClick={()=> dispatch(checkoutThunks()) }> Finalizar pedido </Button>
                </>

            ):(
                <></>
            )}
        
        </Container>
    )
}

export default CheckOut