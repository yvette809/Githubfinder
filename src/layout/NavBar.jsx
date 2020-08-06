import React from 'react'
import {Link} from 'react-router-dom'
//import { propTypes } from 'prop-types'

const NavBar = ()=> {

    return (
        <nav className = " navbar bg-primary"> 
        <h1>
            <i className="fa fa-github"></i>Github Finder
        </h1>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
        </ul>

        </nav>
    )

}
// NavBar.propTypes = {
//     title:propTypes.string.isRequired,
//     icon: propTypes.string.isRequired
// }
 
       


export default NavBar
