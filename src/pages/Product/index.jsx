import { Button } from "@mui/material"
import { useParams } from "react-router-dom"
import products from "../../assets/productList"
import Header from "../../components/Header"
import { useDispatch } from "react-redux";
import { addToCartThunks } from "../../store/modules/cart/thunks"
import Container from "./style";

const ProductPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const product = products.find(element => Number(element.id) === Number(params.id))

    return (
        <div>
            <Header/>
            <Container>
                <h1> {product.title} </h1>
                <figure>
                    <img src={product.image} alt={product.title} />                
                </figure>
                <p> {product.description} </p>
                <p>R$ {product.price.toFixed(2)}</p>
                <Button variant="contained" onClick={()=> dispatch(addToCartThunks(product))} >Adicionar ao Carrinho</Button>                
            </Container>

        </div>
    )
}

export default ProductPage