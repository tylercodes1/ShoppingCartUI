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

//TODO getUserByEmail is a better endpoint
const getUser = async (email, password) => {
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

        console.log(result) // full data + meta data
        console.log(result.data) // full data
        const tmp = result.data.filter(
            (el) => el.email === email && el.password === password
        )
        if (tmp.length > 0) {
            return tmp[0]
        } else {
            return 'error'
        }
    } catch (e) {
        console.log(e)
        return 'error'
    }
}

// TODO need to put more sophisticated credentials in Browser
export const login = async (email, password) => {
    const resp = await loginAPI(email, password)
    console.log(resp)
    if (resp.includes('You have logged in')) {
        const user = await getUser(email, password)
        if (user !== 'error') {
            return {
                type: LOGIN,
                isLoggedIn: true,
                role: resp.includes('Manager') ? 'Manager' : 'Customer',
                userId: user.id,
            }
        }
    }
    return {
        type: LOGIN,
        isLoggedIn: resp.includes('You have logged in') ? true : false,
        role: resp.includes('Manager') ? 'Manager' : 'Customer',
    }
}
