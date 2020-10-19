import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Notes</Link>
                <Link to="/add">Add Note</Link>             
                <Link to="/about">About</Link>             
            </nav>
        </div>)
}

export default Header;