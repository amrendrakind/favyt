import React from "react";
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="row">
                <div >
                    <a className="brand" href="index.html">Favyt</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </div>
        </header>
    )
}
export default Header