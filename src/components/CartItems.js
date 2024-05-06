import React, { useContext } from "react";
import { Context } from "../Context";
function CartItems(props) {
  console.log(props.data);
  const { removeFromCart } = useContext(Context);
  return (
    <div className="cartitem">
      <div className="productdesc">
        <img src={props.data.image} alt="" className="cartImage" />
        <p>{props.data.title}</p>
      </div>
      <div className="price">
        <p>
          {props.quantity} x ₹{props.data.price} = ₹
          {props.quantity * props.data.price}
        </p>
        <span
          class="material-symbols-outlined deleteItemsFromCart"
          onClick={() => {
            removeFromCart(props.data.id);
          }}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default CartItems;
