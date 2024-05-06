import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

function Header() {
  const { cart } = useContext(Context);
  return (
    <div className="Header">
      <Link to="/" className="link">
        <p className="logo">ChorBazzar</p>
      </Link>
      <Link to="/cart" className="link">
        <span className="material-symbols-outlined">
          shopping_cart
          {cart.length > 0 && (
            <span className="material-symbols-outlined redcircle">
              radio_button_unchecked
            </span>
          )}
        </span>
      </Link>
    </div>
  );
}

export default Header;
