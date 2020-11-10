import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';
import './Header.css';
// import { Container } from './styles';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="Logo" className="img-fluid logo" />
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
                    <div className="container-user-login mr-4">
                        <div className="c-avatar-user d-flex align-items-center ">
                            <img src="/images/batman.png" alt="Bruce Wayne" className="img-fluid" />
                            <h6 className="pl-2 mt-2 text-white">
                                Bruce Wayne
                            </h6>
                        </div>

                    </div>
                    <div className="mr-4">
                        <HiOutlineShoppingBag className="text-white icon-bag" />
                    </div>
                    <div className="mr-4">
                        <BsSearch className="text-white icon-search" />
                    </div>
                    <div className="">
                        <button className="btn btn-steam-green">
                            Get <FaSteam />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;