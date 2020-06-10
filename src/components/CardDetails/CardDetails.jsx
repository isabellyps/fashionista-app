import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import image from "../../assets/img/20002605_615_catalog_1.jpg";

import './CardDetails.scss';

const CardDetails = () => (
  <div className="details">
    <div className="details__container">
      <div className="details__image">
        <img src={image} alt="Product" />
      </div>
    </div>
    <div className="details__options">
      <div className="details__options--name">
        <h3>VESTIDO TRANSPASSE BOW</h3>
      </div>
      <div className="details__options--price">
        <strong>R$ 199,90</strong>
        <label>em até 3x de R$ 66,63</label>
      </div>
      <div className="details__options--size">
        <label className="details__options--size--option">Escolha o tamanho</label>
        <br />
        <button className="details__options--size--btn">P</button>
        <button className="details__options--size--btn">M</button>
        <button className="details__options--size--btn">G</button>
      </div>
      <button className="details__options--add-bag">Adicionar à sacola</button>
        <Link  className="details__options--return" to="/">
            <FontAwesomeIcon icon={ faLongArrowAltLeft }/><span>Voltar</span>
        </Link>
    </div>
  </div>
);

export default CardDetails;
