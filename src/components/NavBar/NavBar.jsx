import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/tasklist" >Task List </Link></li>
                        <li><Link to="/taskform" >Task Form </Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
