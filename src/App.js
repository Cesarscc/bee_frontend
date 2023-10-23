import React, { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import garden01 from "./assets/garden01.jpg";
import garden02 from "./assets/garden02.jpg";
import garden03 from "./assets/garden04.jpg";
import garden04 from "./assets/garden05.jpg";
import Card from "./components/Card";
import ViewItemsContext from "./context/ViewItemsContext";
import ArrayFilterContext from "./context/ArrayFilterContext";

function App() {
  const [value, setValue] = useState(false);
  const array = [
    <Card
      name={"Garden 01"}
      color={"#f13f42"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 02"}
      color={"#3ba4ef"}
      type={"garden02"}
      src={garden02}
    />,
    <Card
      name={"Garden 03"}
      color={"#40aa61"}
      type={"garden03"}
      src={garden03}
    />,
    <Card
      name={"Garden 04"}
      color={"#ef413e"}
      type={"garden04"}
      src={garden04}
    />,
    <Card
      name={"Garden 05"}
      color={"#f1a200"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 06"}
      color={"#000000"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 07"}
      color={"#18ffcb"}
      type={"garden02"}
      src={garden02}
    />,
    <Card
      name={"Garden 08"}
      color={"#5018ff"}
      type={"garden03"}
      src={garden03}
    />,
    <Card
      name={"Garden 09"}
      color={"#f818ff"}
      type={"garden04"}
      src={garden04}
    />,
    <Card
      name={"Garden 10"}
      color={"#ff2152"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 11"}
      color={"#f13f42"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 12"}
      color={"#3ba4ef"}
      type={"garden02"}
      src={garden02}
    />,
    <Card
      name={"Garden 13"}
      color={"#40aa61"}
      type={"garden03"}
      src={garden03}
    />,
    <Card
      name={"Garden 14"}
      color={"#ef413e"}
      type={"garden04"}
      src={garden04}
    />,
    <Card
      name={"Garden 15"}
      color={"#f1a200"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 16"}
      color={"#000000"}
      type={"garden01"}
      src={garden01}
    />,
    <Card
      name={"Garden 17"}
      color={"#18ffcb"}
      type={"garden02"}
      src={garden02}
    />,
    <Card
      name={"Garden 18"}
      color={"#5018ff"}
      type={"garden03"}
      src={garden03}
    />,
    <Card
      name={"Garden 19"}
      color={"#f818ff"}
      type={"garden04"}
      src={garden04}
    />,
    <Card
      name={"Garden 20"}
      color={"#ff2152"}
      type={"garden01"}
      src={garden01}
    />,
  ];

  const [arrayFilter, setArrayFilter] = useState(array);
  return (
    <div className="container">
      <div className="header_bg">
        <div className="icon_items">
          <Component1 nombre={"CONTINENTS"} />
          <Component2 nombre={"INVENTORY"} />
          <Component2 nombre={"MARKET"} />
          <Component2 nombre={"EXCHANGE"} />
        </div>
        <div className="end_item">
          <Component3 />
        </div>
      </div>
      <ViewItemsContext.Provider value={{ value, setValue }}>
        <ArrayFilterContext.Provider value={{ arrayFilter, setArrayFilter }}>
          <Component4 array={array} />
          <Component5 />
          <div style={{ position: "relative" }}>
            <Component6 />
          </div>
        </ArrayFilterContext.Provider>
      </ViewItemsContext.Provider>
    </div>
  );
}

export default App;
