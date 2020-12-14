import React, { useState, useEffect } from 'react'
import './Test.css'
import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LocalMallIcon from '@material-ui/icons/LocalMall'

export default function TestPage() {
    const store = useSelector((store) => store)

    const [state, setStat] = useState(0)
    const [addCompState, setAddCompState] = useState('added')
    const [dummyState, setDummyState] = useState()
    const [users, setUsers] = useState([])

    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }

    const login = async () => {
        try {
            const result = await Axios.get(
                'http://3.135.225.25:8080/Project0/Login?email=admin2@gmail.com&password=1234'
                // {
                //     params: {
                //         email: 'admin2@gmail.com',
                //         password: '1234',
                //     },
                // }
            )

            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e.response)
        }
    }

    const showAllUsers = async () => {
        try {
            const result = await Axios.get(
                'http://3.135.225.25:8080/Project0/ShowAllUsers',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )

            setUsers(result.data)
            console.log(result) // full data + meta data
            console.log(result.data) // full data
            console.log(result.data[0]) // individual entry
        } catch (e) {
            console.log(e.response)
        }
    }

    const changePassword = async () => {
        try {
            const result = await Axios.post(
                'http://3.135.225.25:8080/Project0/ChangePassword?email=customerA@gmail.com&password=test999',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        // 'Content-Type': 'application/json',
                    },
                }
            )

            console.log(result) // full data + meta data
            console.log(result.data) // full data
            // console.log(result.data[0]) // individual entry
        } catch (e) {
            console.log(e.response)
        }
    }

    const addNewUser = async () => {
        try {
            const result = await Axios.post(
                'http://3.135.225.25:8080/Project0/AddUser',
                {
                    email: 'test2@gmail.com',
                    password: '222test',
                    role: 'Customer',
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )
            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e.response.data)
        }
    }

    const deleteUser = async () => {
        try {
            const result = await Axios.get(
                'http://3.135.225.25:8080/Project0/DeleteUser?id=8'
            )
            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e.response)
        }
    }

    const showAllProducts = async () => {
        try {
            const result = await Axios.get(
                'http://3.135.225.25:8080/Project0/ShowProductList'
            )
            console.log(result)
            console.log(result.data)
        } catch (e) {
            console.log(e.response)
        }
    }

    const addClick = () => {
        setStat(state + 1)
    }

    const changeColor = () => {
        setAddCompState('added blue')
    }

    const addComponent = (thisKey) => {
        return <div className={addCompState} key={thisKey}></div>
    }

    return (
        <div>
            <h1>HelloWhat'sUp</h1>
            <button onClick={() => console.log('hello')}>toNotFound</button>
            <br />
            <button onClick={() => changeColor()}>changeColor</button>
            <br />
            <button onClick={() => addClick()}>addComponent</button>
            <br />
            <button onClick={() => login()}>login</button>
            <br />
            <button onClick={() => showAllUsers()}>showAll</button>
            <br />
            <button onClick={() => changePassword()}>changePassword</button>
            <br />
            <button onClick={() => addNewUser()}>addUser</button>
            <br />
            <button onClick={() => deleteUser()}>deleteUser</button>
            <LocalMallIcon />
            <br />
            <button onClick={() => showAllProducts()}>showAllProducts</button>
            {/* <br />
            <button onClick={() => showAllUsers()}>showAll</button>
            {users.map((user) => (
                // console.log(user.id)
                <p>{user.email}</p>
            ))} */}
            {Array.from(Array(state).keys()).map((index) => {
                return addComponent(index)
            })}
            {/* <div className="added"></div> */}
        </div>
    )
}

// https://www.robinwieruch.de/react-hooks-fetch-data?fbclid=IwAR1bJCaD_T5EnDy9shcLNqcUqUw266Y4-RoPBSGjS2YIDQgYNatVdMyqD00
// useEffect(async () => {
//     // const result = await axios(
//     //     'http://3.135.225.25:8080/Project0/Login?email=admin2@gmail.com&password=1234'
//     // )
//     // console.log(result)
//     // console.log(result.data)
//     // setDummyState(result.data)
//     const fetchData = async () => {
//         // const result = await Axios.get
//         // 'http://3.135.225.25:8080/Project0/ChangePassword?email=customerA@gmail.com&password=999' //post
//         // 'http://3.135.225.25:8080/Project0/Login?email=admin2@gmail.com&password=1234'
//         // 'http://18.222.140.73:8080/APIv2-0.0.1/HelloServlet'
//         // 'http://18.222.140.73:8080/APIv2-0.0.1/UserServlet'
//         // 'http://18.222.140.73:8080/APIv2-0.0.1/LoginServlet'
//         // 'http://3.135.225.25:8080/Project0/ShowAllUsers'
//         // 'http://localhost:4000/posts'
//         // 'http://localhost:4000/login'
//         // ()

//         const result = await Axios.post(
//             'http://18.222.140.73:8080/APIv2-0.0.1/LoginServlet',
//             {
//                 username: 'tko',
//                 password: 'password1',
//             }
//             // {
//             //     headers: {
//             //         'content-type': 'application/json',
//             //     },
//             // }
//         )
//         console.log(result)
//         console.log(result.data)
//         setDummyState(result.data)
//     }
//     fetchData()
// }, [])
