import { LOGIN } from './actionTypes'
import Axios from 'axios'

const loginAPI = async (email, password) => {
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
    const url = `http://3.135.225.25:8080/Project0/Login?email=${email}&password=${password}`
    console.log(`${url}`)
    try {
        const result = await Axios.get(url)
        console.log(`result: ${result.data}`)
        return result.data
    } catch (e) {
        console.log(e.response)
        return 'error'
    }
}

// TODO need to put more sophisticated credentials in Browser
export const login = async (username, password) => {
    const resp = await loginAPI(username, password)
    console.log(resp)
    return {
        type: LOGIN,
        isLoggedIn: resp.includes('You have logged in') ? true : false,
        isManager: resp.includes('Manager') ? 'Manager' : 'Customer',
    }
}
