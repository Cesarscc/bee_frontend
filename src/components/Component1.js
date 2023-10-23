import React from "react";
import "../Global.css";

const Component_1 = ({ nombre }) => {
  return (
    <div className="header_menu">
      <div className="image_icon_1">
        <p className="name_etiqueta">{nombre}</p>
      </div>
    </div>
  );
};

export default Component_1;
