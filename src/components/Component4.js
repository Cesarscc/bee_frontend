import React, { useContext, useEffect, useState, useRef } from "react";
import ViewItemsContext from "../context/ViewItemsContext";
import ArrayFilterContext from "../context/ArrayFilterContext";

const Component4 = ({ array }) => {
  const { setValue } = useContext(ViewItemsContext);
  const { setArrayFilter } = useContext(ArrayFilterContext);
  const viewItems = () => {
    setValue(true);
  };

  const notViewItems = () => {
    setValue(false);
  };
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("todas");
  const [isOpen, setIsOpen] = useState(false);
  const opciones = ["todas", "garden01", "garden02", "garden03", "garden04"];

  function filterItems(newValue) {
    console.log(opcionSeleccionada);
    setArrayFilter(
      array.filter((array) =>
        newValue === "todas" ? true : array.props.type === newValue
      )
    );
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    setOpcionSeleccionada(newValue);
    filterItems(newValue);
  };

  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    // Agregar el escucha de evento al document
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminar el escucha de evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handeChangeOpen = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div className="opcion">
        <div style={{ display: "flex" }}>
          <div className="icon_back" onClick={notViewItems} />
          <div className="greehous" onClick={viewItems}>
            <p>GREENHOUS</p>
          </div>
        </div>
        <div className="select_wrapper">
          <select
            ref={boxRef}
            className="select_filter"
            onChange={handleChange}
            onClick={handeChangeOpen}
          >
            <option value="" disabled selected>
              Type
            </option>
            {opciones.map((opcion) => (
              <option className="opcion_hiden" key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Component4;
