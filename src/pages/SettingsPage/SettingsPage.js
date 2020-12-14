import { Axios } from 'axios'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
    return (
        <div className="settings-page">
            <button onClick={() => console.log('hello')}>
                Change Password
            </button>
        </div>
    )
}
