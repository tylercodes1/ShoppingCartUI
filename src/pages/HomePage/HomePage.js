import './HomePage.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export function HomePage() {
    const store = useSelector((store) => store)
    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }

    return (
        <div className="home-page">
            <div className="announcement">
                Welcome to your personalized shopping cart!
            </div>
        </div>
    )
}
