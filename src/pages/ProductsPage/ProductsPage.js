import Axios from 'axios'
import { React, useEffect, useState } from 'react'
import './ProductsPage.css'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Tooltip from '@material-ui/core/Tooltip'

export default function ProductsPage() {
    const [productState, setProductState] = useState([])
    const store = useSelector((store) => store)

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

    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }

    const addProduct = async (name, price) => {
        console.log(store.userId)
        console.log(name)
        console.log(price)
        const id = store.userId
        try {
            await Axios.post(
                'http://3.135.225.25:8080/Project0/ProductWithStatus',
                {
                    userId: 1,
                    name: 'test',
                    orderDate: 'Dec 1st', // TODO DateTime stuff
                    price: 1000,
                    status: 'Not Shipped',
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )
            console.log('madeit')
            // console.log(result)
            // console.log(result.data)
        } catch (e) {
            console.log(e.response.data)
        }
    }
    const addToShoppingCart = async (name, price) => {
        await addProduct(name, price)
        alert('Added to shopping cart!')
    }

    const buildProducts = (product, key) => {
        return (
            <div className="product" key={key}>
                <div>
                    <h2 className="product-name">{product.productName}</h2>
                    <p className="description">{product.productDescription}</p>
                </div>
                <div className="price-add">
                    <p className="price">{product.prductPrice}</p>
                    <Link to="shopping-cart">
                        <Tooltip
                            title="Add to Cart"
                            aria-label="add to cart"
                            arrow
                        >
                            <AddCircleIcon
                                className="add-btn"
                                onClick={() =>
                                    addToShoppingCart(
                                        product.productName,
                                        product.prductPrice
                                    )
                                }
                                style={{ color: '#4787f0' }}
                                fontSize="large"
                            ></AddCircleIcon>
                        </Tooltip>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="products-page">
            {productState.map((product, index) =>
                buildProducts(product, index)
            )}
        </div>
    )
}
