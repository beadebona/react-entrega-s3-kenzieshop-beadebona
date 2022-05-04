import StyledDisplay from "./style"
import products from "../../assets/productList"
import ProductCard from "../Card/index"

const Display = () =>{
    return (
        <StyledDisplay>
            {products.map(product => <ProductCard product={product} />)}

        </StyledDisplay>
        
    )
}
export default Display