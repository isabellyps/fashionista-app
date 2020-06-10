import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

// import LinkWrapper from '../../utils/LinkWrapper';
import "./ItemGrid.scss";

const ItemGrid = (props) => {
  const { item } = props;
  const path = `/product/${item.name}`;

  return (

  <Fragment>
    <div className="grid__box">
      <Link to={path}>
        <figure className="grid__image">
          <img src={item.image} alt="item" />
        </figure>
        <h3 className="grid__product">{item.name}</h3>
        <div className="grid__price">
          <span>{item.regular_price}</span>
        </div>
      </Link>
    </div>
  </Fragment>
)
  };

export default ItemGrid;
