import React from "react";
import "../../styles/card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card custom-card">
      <img src={props.image} alt="Card image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary" target="_blank">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Card;
