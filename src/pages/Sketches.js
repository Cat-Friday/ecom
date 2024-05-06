import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
function Sketches() {
  const { products, loading } = useContext(Context);

  return (
    <div className="sketches">
      {loading && <p className="loading">Loading...</p>}
      {!loading && products.map((elem) => <Image data={elem} key={elem.id} />)}
      {console.log(products)}
    </div>
  );
}

export default Sketches;
