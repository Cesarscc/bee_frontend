import React, { useContext } from "react";
import ViewItemsContext from "../context/ViewItemsContext";
const Component6 = () => {
  const { value } = useContext(ViewItemsContext);
  return value ? (
    <div className="info">
      <div className="user_bee" />
      <p className="name_user">DrBeebeep</p>
      <div className="contain_info">
        <p className="icon_nuez" />
        <p className="puntaje_user">999,999</p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Component6;
