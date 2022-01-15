import React, { useState } from "react";
import { useDrop } from "react-dnd";
import ItemsContainer from "../../../components/ItemsContainer";

import Items from "../Items";

const Measures = () => {
  const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "data",
    drop: (item) =>
      setBasket((basket) => {
        console.log(item);
        return !basket.some((el) => el.id === item.id)
          ? [...basket, item]
          : [...basket];
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const clearMeasures = () => {
    setBasket([]);
  };
  const setMeasuresData = () => {
    return (
      <>
        {basket.map((pet) => (
          <Items id={pet.id} key={pet.id} name={pet.name} />
        ))}
        {isOver && <p>You can drop here</p>}
      </>
    );
  };
  return (
    <div className="basket" ref={dropRef}>
      <ItemsContainer
        dataItemsList={setMeasuresData()}
        onClear={clearMeasures}
      />
    </div>
  );
};

export default Measures;
