import React, { useState } from 'react'
import { login } from './../../store/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import TestPage from './../test/Test'

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
        dispatch(resp)
    }

    if (state.isLoggedIn) {
        return <Redirect to="/test"></Redirect>
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input id="email" name="email" type="text" />
                <br />
                <label htmlFor="password">password</label>
                <input id="password" type="password" name="password" />
                <br />
                <button> btn</button>
            </form>
        </div>
    )
}
