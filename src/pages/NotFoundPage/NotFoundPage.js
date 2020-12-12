import React, { useState } from 'react'
import { login } from '../../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'

export default function NotFoundPage() {
    const [st, setSt] = useState({ isLoggedIn: true })
    const state = useSelector((store) => store)
    const dispatch = useDispatch()
    console.log(st)
    console.log(state)
    return (
        <div>
            <h1>Error 404 Page Not Found</h1>
            <button onClick={() => dispatch(login(st.isLoggedIn))}>
                setState
            </button>
            <button onClick={() => console.log(state)}>checkState</button>
        </div>
    )
}
