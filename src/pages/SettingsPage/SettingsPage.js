import Axios from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './SettingsPage.css'

export function SettingsPage() {
    const store = useSelector((store) => store)
    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }
    const changePassword = async (password) => {
        let result
        try {
            result = await Axios.get(
                `http://3.135.225.25:8080/Project0/FindUserById?id=1`
            )
        } catch (e) {
            console.log('error retrieving user')
            console.log(e)
        }

        const email = result.data[0].email

        try {
            const result = await Axios.post(
                `http://3.135.225.25:8080/Project0/ChangePassword?email=${email}&password=${password}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            )

            console.log(result) // full data + meta data
            console.log(result.data) // full data
            // console.log(result.data[0]) // individual entry
            alert('Successfully changed password!!')
        } catch (e) {
            console.log(e.response)
            alert('error changing password')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data)
        const password = data.get('password')
        const confirmedPassword = data.get('password-confirmation')
        if (password === confirmedPassword) {
            await changePassword(password)
        } else {
            alert("Your passwords don't match. Please Re-enter them")
        }
    }

    return (
        <div className="settings-page">
            <div className="settings-box">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                        <br />
                        <label htmlFor="password-confirmation">
                            Confirm Password
                        </label>
                        <input
                            id="password-confirmation"
                            type="password"
                            name="password-confirmation"
                        />
                        <br />
                        <button>Change Password</button>
                    </form>
                </div>
                <h1 className="logout" onClick={() => console.log('logout')}>
                    Logout
                </h1>
            </div>
        </div>
    )
}
