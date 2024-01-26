import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends React.Component {
    render() {
        return (
            <header>
            <nav className="navbar">
                    <a href="index.html"> </a>
                    <img className="nav-logo" src='/images/logoSanja_Z.png' alt='Logo Sanja'></img>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href='/'  className="nav-link">Home </a>
                    </li>
                    <li className="nav-item">
                        <AnchorLink to="Introduction" href='#intro' className="nav-link"> Voorstellen </AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink to="Projects" href='#porto' className="nav-link">Projecten </AnchorLink>
                    </li>
                </ul>
            </nav>
        </header>        
        )
    }
}



export default Header; 