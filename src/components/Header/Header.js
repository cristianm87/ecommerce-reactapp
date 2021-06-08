import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <a href="index.html">
                            <div className="logo-wrapper">
                                <img src="./images/logo.png" alt="logo" />
                                <span className="logo-brand">Marca</span>
                            </div>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="index.html">About</a>
                        </li>
                        <li>
                            <a href="index.html">Help</a>
                        </li>
                        <li className="submenu">
                            <span>Dropdown</span>
                            <ul>
                                <li>
                                    <a href="index.html">First</a>
                                </li>
                                <li>
                                    <a href="index.html">Second</a>
                                </li>
                                <li>
                                    <a href="index.html">Third</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="index.html">Contact</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
}

export default Header;
