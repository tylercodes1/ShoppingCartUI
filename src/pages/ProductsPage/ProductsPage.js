import Axios from 'axios'
import { React, useEffect, useState } from 'react'
import './ProductsPage.css'

export default function ProductsPage() {
    const [productState, setProductState] = useState([])

    const showAllProducts = async () => {
        try {
            const result = await Axios.get(
                'http://3.135.225.25:8080/Project0/ShowProductList'
            )
            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e)
            console.log(e.response)
        }
    }
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

    const buildProducts = (product) => {
        return (
            <div className="product">
                <div>{product.prductPrice}</div>
                <div>{product.productDescription}</div>
                <div>{product.productName}</div>
            </div>
        )
    }

    return (
        <div className="products-page">
            {productState.map((product) => buildProducts(product))}
        </div>
    )
}
