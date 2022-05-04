import { useSelector } from "react-redux"
import Card from "../../components/Card"
import CheckOut from "../../components/CheckOut"
import StyledDisplay from "../../components/Display/style"
import Header from "../../components/Header"

const Cart = () => {
    const cart = useSelector(state=> state.cart)

    return (
        <>
        <Header/>
        <h1>Carrinho</h1>
        <StyledDisplay>
        {cart.map(product => <Card cartSize={true}  product={product} />)}
        </StyledDisplay>
        <CheckOut/>

        </>
    )
}

export default Cart