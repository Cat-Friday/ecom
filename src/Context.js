import React, { useState, useEffect } from "react";

const Context = React.createContext();
let modifiedData = [];
function ContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(function () {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=iB5nVSyxhlZPwpOGkiWWKcfLE7dO0B1VIo_pEmGTXZPGoKbb-zfipi13kWOZx7iHmWPDkCEnU5T8bWKFWoCjx-Byp0N6gwbPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHIavOcKtIwskONy_oeMCcPZ-7I9t2RJKlr2h7s5StR6HOxBHOaXy2VRwEmDo7FwAc-17A3SqKLR-7mSh27KNkHDyjqP4SqZzQ&lib=MXRZrB-XIWiyBt88OIyNdXfM0nuZ0WmWs"
    )
      .then((response) => response.json())
      .then((data) => {
        modifiedData = data.data.map((obj) => ({
          ...obj,
          isFavourited: false,
        }));
        setProducts(modifiedData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleFavourite = (id) => {
    // const updatedProducts = products.map((elem) => {
    //   if (elem.id === id) {
    //     return { ...elem, isFavourited: !elem.isFavourited };
    //   } else {
    //     return elem;
    //   }
    // });
    setProducts((prev) => {
      const updatedProducts = prev.map((elem) => {
        if (elem.id === id) {
          return { ...elem, isFavourited: !elem.isFavourited };
        } else {
          return elem;
        }
      });
      return updatedProducts;
    });
  };
  console.log(cart);
  const addToCart = (id) => {
    let product = products.find((elem) => elem.id === id);
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    let product = cart.find((elem) => elem.id === id);
    const index = cart.indexOf(product);

    setCart((prev) => prev.filter((elem, ind) => ind !== index));
  };

  return (
    <Context.Provider
      value={{
        products,
        loading,
        toggleFavourite,
        addToCart,
        cart,
        removeFromCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
