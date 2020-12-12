import { LOGIN } from './actionTypes'

// TODO need to put more sophisticated credentials in Browser
export const login = (isLoggedIn) => {
    return { type: LOGIN, isLoggedIn: isLoggedIn }
}
