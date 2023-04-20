
import Product from "../components/product"
export default function Products() {

    let product_style = {
        border: "1px solid black"
    }
    let color = "red"

    return (
        <>
            <div style={{ color: color }}>products</div>
            <h1>props</h1>
            <hr />
            <Product/>
            <Product/>
            <Product/>
         
        </>

    )
}
