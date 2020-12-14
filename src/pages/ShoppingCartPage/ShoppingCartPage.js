import { React, useState, useEffect } from 'react'
import './ShoppingCartPage.css'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export function ShoppingCartPage() {
    const [cartState, setCartState] = useState([])
    const store = useSelector((store) => store)
    console.log(store)
    useEffect(async () => {
        // const result = await axios(
        //     'http://3.135.225.25:8080/Project0/Login?email=admin2@gmail.com&password=1234'
        // )
        // console.log(result)
        // console.log(result.data)
        // setDummyState(result.data)
        const fetchData = async () => {
            try {
                const result = await Axios.get(
                    ` http://3.135.225.25:8080/Project0/productWithStatusByUserId?id=${store.userId}`
                )
                console.log(result)
                console.log(result.data)
                setCartState(result.data)
            } catch (e) {
                console.log(e.response)
            }
        }
        fetchData()
    }, [])

    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }
    const getProductsByUserId = async (id) => {}
    const buildCart = (product, index) => {
        console.log(product)
        return (
            <div className="cart-item">
                <div>{product.name}</div>
                <div>{product.status.status}</div>
                <div>{product.price}</div>
                <div>{product.orderDate}</div>
            </div>
        )
    }
    return (
        <div className="shopping-cart-page">
            {/* id will be globally stored state */}
            <button onClick={() => getProductsByUserId(2)}>show</button>
            {cartState.map((el, ind) => buildCart(el, ind))}
        </div>
    )
}
