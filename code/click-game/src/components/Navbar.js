import React from 'react';

function Navbar(props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-primary ">
            <span className="nav-item"><h2>Loop Fruits</h2></span>
            <span className="nav-item">{props.message}</span>
            <span className="nav-item">Your score: {props.userScore} | Highest score: {props.topScore} </span>
        </nav>
    );
};

export default Navbar;
