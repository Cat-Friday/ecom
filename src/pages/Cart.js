import React, { useContext } from "react";
import { Context } from "../Context";
import CartItems from "../components/CartItems";
function Cart() {
  const { cart } = useContext(Context);

  let uniqueItems = cart.filter((item, index) => cart.indexOf(item) === index); //calculating unique items in the cart and calculating the total number of those individual items
  let uniqueItemscount = [];
  let totalCartValue = 0;
  for (let i = 0; i < uniqueItems.length; i++) {
    let count = 0;
    for (let j = 0; j < cart.length; j++) {
      if (uniqueItems[i].id === cart[j].id) {
        count++;
      }
    }
    totalCartValue = totalCartValue + count * uniqueItems[i].price;
    uniqueItemscount.push(count);
  }
  console.log(uniqueItemscount);
  return (
    <div className="cartContainer">
      {uniqueItems.map((elem, index) => (
        <CartItems data={elem} key={index} quantity={uniqueItemscount[index]} />
      ))}
      {cart.length === 0 && (
        <p className="emptyCartMessage">
          Your cart is empty {`:(`}
          <br></br> Add items to cart!
        </p>
      )}
      {cart.length > 0 && (
        <p className="totalCartValue">Total : {Math.ceil(totalCartValue)}</p>
      )}
      {cart.length > 0 && <button className="checkoutbtn">Place Order</button>}
    </div>
  );
}

export default Cart;
