import styles from "@/styles/Product.module.css"
import { AddToCart, DeleteButton } from "./AddtoCart"

export default function Product( props ) {

    console.log("name",props)


    return <div className={styles.product} >
        <p> {props.name }</p>
        <p>{props.description}</p>
        <AddToCart />  
        <DeleteButton />
    </div>
}