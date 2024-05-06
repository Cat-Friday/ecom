import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

function Image(props) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavourite, addToCart, cart } = useContext(Context);
  const [timesAddedToCart, setTimesAddedToCart] = useState(
    cart.filter((elem) => elem.id === props.data.id).length
  );

  const incrementcart = () => {
    setTimesAddedToCart((prev) => prev + 1);
  };

  return (
    <div
      className={`${hovered && "focusitem"} productcontainer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="productImgAndTitle">
        <img src={props.data.image} alt={props.data.id} className="items" />
        {hovered && <p className="producttitle">{props.data.title}</p>}
      </div>

      {hovered && (
        <span
          className={`${
            props.data.isFavourited === true
              ? "material-symbols-outlined hertoutline filledhert"
              : "material-symbols-outlined hertoutline"
          }`}
          onClick={() => {
            toggleFavourite(props.data.id);
          }}
        >
          favorite
        </span>
      )}
      {hovered && (
        <span
          className="material-symbols-outlined cartoutline"
          onClick={() => {
            addToCart(props.data.id);
            incrementcart();
          }}
        >
          add_shopping_cart
          {timesAddedToCart >= 1 && (
            <p className="cartcount">{timesAddedToCart}</p>
          )}
        </span>
      )}
    </div>
  );
}

Image.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    isFavourited: PropTypes.bool,
  }),
};

export default Image;
