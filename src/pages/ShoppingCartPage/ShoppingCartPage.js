import { React } from 'react'
import './ShoppingCartPage.css'
import Axios from 'axios'

export function ShoppingCartPage() {
    const getProductsByUserId = async (id) => {
        try {
            const result = await Axios.get(
                ` http://3.135.225.25:8080/Project0/productWithStatusByUserId?id=${id}`
            )
            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e.response)
        }
    }
    return (
        <div className="shopping-cart-page">
            {/* id will be globally stored state */}
            <button onClick={() => getProductsByUserId(2)}>show</button>
        </div>
    )
}
