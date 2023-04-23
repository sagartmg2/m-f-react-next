import Product from "@/components/Product"

const Products = () => {

    let age = 18

    return <>
        <h1>Products</h1>
        <p>loream ipusm ..... </p>
        <hr />
        {/* <div id={styles.target} className="" > */}


        {/* Product("one") */}
        {/* Product("two") */}

        {/* props = arugement */}

        <Product name="one" description = "descripiion - one" />
        <Product name="two" description = "descripiion - two" />
        <Product name="three" description = "descripiion -three" />

    </>
}

export default Products