import './HomePage.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { Link } from 'react-router-dom'

export function HomePage() {
    const store = useSelector((store) => store)
    if (!store.isLoggedIn) {
        return <Redirect to="/"></Redirect>
    }

    return (
        <div className="home-page">
            <div className="home-content">
                <h1 className="welcome">
                    Welcome to your personalized shopping experience
                </h1>
                <p className="welcome-subtitle">Click below to begin</p>
                <Link
                    to="/products"
                    style={{ textDecoration: 'none', alignSelf: 'flex-end' }}
                >
                    <button className="shop-now">
                        <p className="shop-now-text">Shop Now</p>
                        <ArrowRightAltIcon fontSize="small" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
