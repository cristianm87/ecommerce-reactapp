import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar({brand}) {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <a href="index.html">
                        <div className="logo-wrapper">
                            <img src="./images/logo.png" alt="logo" />
                            <span className="logo-brand">{brand}</span>
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
    );
}

export default NavBar;
