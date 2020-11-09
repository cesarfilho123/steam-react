import React from 'react';
import  './Header.css';
// import { Container } from './styles';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="Logo" className="img-fluid logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="aa">
                                Descubra
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Games
                             </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="a">Action</a>
                                <a className="dropdown-item" href="a">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="a">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="a">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="a">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="a">Sobre</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Header;