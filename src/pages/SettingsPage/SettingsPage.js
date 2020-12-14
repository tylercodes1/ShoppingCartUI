import { Axios } from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './SettingsPage.css'

export function SettingsPage() {
    const store = useSelector((store) => store)
    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }
    const changePassword = async (password) => {
        try {
        } catch (e) {
            console.log('error retrieving user')
        }

        try {
            const result = await Axios.post(
                `http://3.135.225.25:8080/Project0/ChangePassword?email=${store.email}&password=${password}`,
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
        } catch (e) {
            console.log(e.response)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data.get('password'))
        console.log(data.get('password-confirmation'))
    }

    return (
        <div className="settings-page">
            <div className="settings-box">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="password">Password</label>
                        <input id="password" name="email" type="password" />
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
