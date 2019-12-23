import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper blue darken-4">
                <div className="container">
                    <Link to='/' className="brand-logo">Tutorial</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

