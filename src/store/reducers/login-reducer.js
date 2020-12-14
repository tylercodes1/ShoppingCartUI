import { LOGIN } from '../actions/actionTypes'
import { Axios } from 'axios'

const loginReducer = (state = { isLoggedIn: false }, action) => {
    console.log('being called')
    console.log(action)
    console.log(action.type)
    // console.log(action.isLoggedIn)
    switch (action.type) {
        case LOGIN:
            return { isLoggedIn: action.isLoggedIn }
        default:
            return state
    }
}
export default loginReducer
