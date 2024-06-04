import React from "react";
import "./card.css";

const Card = ({ cardData }) => {
  return (
    <div className="card_container">
      <div className="card_name_pp">
        <div className="name">{cardData?.id}</div>
        <div className="profile_pic">
          <i className="fa-solid fa-user" />
        </div>
      </div>
      <div className="card_title">{`${cardData?.title?.substring(
        0,
        35
      )}...`}</div>
      <div className="card_options">
        <i className="fa-solid fa-ellipsis" />
        <i className="fa-solid fa-circle" />
        <span className="feature_req">{cardData?.tag[0]}</span>
      </div>
    </div>
  );
};

export default Card;
