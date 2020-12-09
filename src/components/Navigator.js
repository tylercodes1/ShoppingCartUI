import React from 'react';
import { Link } from 'react-router-dom';

function Navigator() {
    return (
        <ul className="c1-navigationalLinks">
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/what">About</Link>
            </li>
            {/* <li>
                <Link to="/dashboard">Dashboard</Link>
            </li> */}
        </ul>
    )
}

export default Navigator;