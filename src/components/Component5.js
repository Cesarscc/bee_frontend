import React, { useContext } from "react";
import ArrayFilterContext from "../context/ArrayFilterContext";
import ViewItemsContext from "../context/ViewItemsContext";

const Component5 = () => {
  const { value } = useContext(ViewItemsContext);
  const { arrayFilter } = useContext(ArrayFilterContext);
  return value ? (
    <>
      <div className="dashboard_scroll">
        <div className="dashboard">
          {arrayFilter.map((item, ix) => (
            <div key={ix}>{item}</div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Component5;
