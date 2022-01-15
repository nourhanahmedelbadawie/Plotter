import React, { useState } from "react";
import { useDrop } from "react-dnd";

import Items from "../Items";
import ItemsContainer from "../../../components/ItemsContainer";

const Dimensions = () => {
  const [basket, setBasket] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "data",
    drop: (item) =>
      setBasket((basket) => {
        console.log(basket);
        return !basket.some((el) => el.id === item.id)
          ? [...basket, item]
          : [...basket];
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const clearDimensions = () => {
    setBasket([]);
  };
  const setDimensionsData = () => {
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
        dataItemsList={setDimensionsData()}
        onClear={clearDimensions}
      />
    </div>
  );
};

export default Dimensions;
