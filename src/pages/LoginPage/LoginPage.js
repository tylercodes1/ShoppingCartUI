import React, { useState } from 'react'
import { login } from './../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './LoginPage.css'
import LocalMallIcon from '@material-ui/icons/LocalMall'

export default function LoginPage() {
    const state = useSelector((store) => store)
    const dispatch = useDispatch()

    if (state.isLoggedIn) {
        return <Redirect to="/home"></Redirect>
    }
    // send login to api
    // don't store in state
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        // console.log(data.get('email'))
        // console.log(data.get('password'))
        // console.log(user)
        //here is where we would set redux state
        const resp = await login(data.get('email'), data.get('password'))
        const whet = dispatch(resp)
        if (whet.isLoggedIn === false) {
            alert('invalid credentials')
        }
    }

    if (state.isLoggedIn) {
        return <Redirect to="/test"></Redirect>
    }
    return (
        <div className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
                <LocalMallIcon style={{ color: '#4787f0', fontSize: '60' }} />
                <h1>Welcome back!</h1>
                <p>Log in to continue shopping</p>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" />
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" />
                <br />
                <button className="login-btn">Login</button>
            </form>
        </div>
    )
}
