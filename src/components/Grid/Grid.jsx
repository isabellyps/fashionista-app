import React, { useState, useEffect, Fragment } from "react";
import ItemGrid from "../ItemGrid/ItemGrid";
import ApiService from "../../utils/ApiService";

import "./Grid.scss";

const Grid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ApiService.ListContacts()
      .then((res) => {
        const productsMap = res.map((item, index) => {
          return <ItemGrid key={index} item={item} />;
        });

        setItems(productsMap);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="grid">
      <div className="container">
        {items.length > 0 && (
          <div className="grid__title">{`Exibindo ${items.length} items`}</div>
        )}
        <div className="grid__itens">{items}</div>
      </div>
    </section>
  );
};

export default Grid;
