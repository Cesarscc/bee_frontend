import React from "react";

const Card = ({ name, color, type, src }) => {
  return (
    <div className="card">
      <p className="name">{name}</p>
      <div className="garden" style={{ backgroundImage: `url(${src})` }} />
      <div
        className="bullet"
        style={{
          backgroundColor: color,
          borderRadius: "99999px",
          height: 25,
          width: 25,
        }}
      />
      <div className="card_button">
        <p>ENTER</p>
      </div>
    </div>
  );
};

export default Card;
