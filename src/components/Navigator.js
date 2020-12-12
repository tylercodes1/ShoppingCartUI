import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigator() {
    return (
        <ul className="c1-navigationalLinks">
            <li>
                <NavLink exact to="/" activeClassName="selected-nav">
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/what" activeClassName="selected-nav">
                    About
                </NavLink>
            </li>
            {/* <li>
                <Link to="/dashboard">Dashboard</Link>
            </li> */}
        </ul>
    )
}

export default Navigator
