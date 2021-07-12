import React, { useState, useEffect } from "react";
import { getFirestore } from "../App";
import ItemDetail from "./ItemDetail";
import "./DetailContainer.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  

  useEffect(() => {
    setLoad(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size === 0) {
          console.log("No results");
        }
        setProducts(querySnapShot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <div className="parentElement">
    
      {
        products.map((products,index)=>{return(
          <ItemDetail key={index} id={products.id} image={products.img} name={products.title} precio={products.price} description={products.description} />
          
        )})
      }
    </div>
  );
}

export default ItemListContainer;
