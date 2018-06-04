import React from "react"
import logo from "../logo.svg";
const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a className="brand-logo center">{logo}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;