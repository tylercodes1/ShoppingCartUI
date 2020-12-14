import { React, useState, useEffect } from 'react'
import './ShoppingCartPage.css'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import Tooltip from '@material-ui/core/Tooltip'

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

        setTimeout(() => fetchData(), 350)
    }, [])

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
    const removeItem = async (product) => {
        try {
            const result = await Axios.get(
                `http://3.135.225.25:8080/Project0/DeleteProduct?id=${product.id}`
            )
            console.log(result)
            console.log(result.data)
            fetchData()
            alert('Successfully removed product!')
        } catch (e) {
            console.log(e.response)
            alert('error deleting product')
        }
    }

    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }
    const buildCart = (product, index) => {
        console.log(product)
        return (
            <div className="cart-item">
                <div className="cart-name-price">
                    <h2 className="cart-product-name">{product.name}</h2>
                    <p className="cart-price">${product.price}</p>
                </div>
                <p>Status: {product.status.status}</p>
                <p>Order Date: {product.orderDate}</p>
                <div className="remove-btn">
                    <Tooltip
                        title="Remove from Cart"
                        aria-label="remove from cart"
                        arrow
                    >
                        <RemoveCircleIcon
                            className="remove-btn"
                            onClick={() => removeItem(product)}
                            style={{ color: '#4787f0' }}
                            fontSize="large"
                        ></RemoveCircleIcon>
                    </Tooltip>
                </div>
            </div>
        )
    }
    return (
        <div className="shopping-cart-page">
            {/* id will be globally stored state */}
            {/* <button onClick={() => console.log('pls')}>show</button> */}
            {cartState.map((el, ind) => buildCart(el, ind))}
        </div>
    )
}
