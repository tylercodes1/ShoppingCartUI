import Axios from 'axios'
import { React, useEffect, useState } from 'react'
import './ProductsPage.css'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ProductsPage() {
    const [productState, setProductState] = useState([])
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
                    'http://3.135.225.25:8080/Project0/ShowProductList'
                )

                console.log(result.data)
                setProductState(result.data)
            } catch (e) {
                console.log(e)
                console.log(e.response)
            }
        }
        fetchData()
    }, [])

    const addToShoppingCart = () => {
        alert('Added to shopping cart!')
        // return <Redirect to="/shopping-cart"></Redirect>
    }

    const buildProducts = (product) => {
        return (
            <div className="product">
                <div>{product.prductPrice}</div>
                <div>{product.productDescription}</div>
                <div>{product.productName}</div>
                <Link to="shopping-cart">
                    <AddCircleIcon
                        className="add-btn"
                        onClick={() => addToShoppingCart()}
                    ></AddCircleIcon>
                </Link>
            </div>
        )
    }

    return (
        <div className="products-page">
            {productState.map((product) => buildProducts(product))}
        </div>
    )
}
