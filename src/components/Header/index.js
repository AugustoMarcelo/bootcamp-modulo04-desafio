import React from 'react';
import './style.css';
import logo from './logo.svg'
import userIcon from './user-icon.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Facebook Logo"/>
            <div className="info">
                <span>Meu perfil</span>
                <img src={userIcon} alt="User Icon"/>
            </div>
        </header>
    )
}

export default Header;