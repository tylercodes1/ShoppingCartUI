import { Axios } from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './SettingsPage.css'

export function SettingsPage() {
    const store = useSelector((store) => store)
    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }
    const changePassword = async () => {
        try {
            const result = await Axios.post(
                'http://3.135.225.25:8080/Project0/ChangePassword?email=customerA@gmail.com&password=test999',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        // 'Content-Type': 'application/json',
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

    const handleSubmit = () => {}

    return (
        <div className="settings-page">
            <div className="settings-box">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">email</label>
                        <input id="email" name="email" type="text" />
                        <br />
                        <label htmlFor="password">password</label>
                        <input id="password" type="password" name="password" />
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
