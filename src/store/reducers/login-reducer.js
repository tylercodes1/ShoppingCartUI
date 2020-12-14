import { LOGIN } from '../actions/actionTypes'
import { Axios } from 'axios'

const loginReducer = (state = { isLoggedIn: false }, action) => {
    console.log('being called')
    console.log(action)
    console.log(action.type)
    console.log(action.isLoggedIn)
    console.log(action.isManager)
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: action.isLoggedIn,
                isManager: action.isManager,
            }
        default:
            return state
    }
}
export default loginReducer
