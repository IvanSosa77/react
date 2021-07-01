import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import "./DetailContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.results);
      });
  }, []);

  return (
    <div className="parentElement">
      {
        products.map((products,index)=>{return(
          <ItemDetail key={index} id={products.id} image={products.thumbnail} name={products.title} precio={products.price} />
        )})
      }
    </div>
  );
}

export default ItemListContainer;
