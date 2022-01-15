import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import {addDimensionItem} from "../../../store/actions";
import Items from "../Items";
import ItemsContainer from "../../../components/ItemsContainer";

const Dimensions = () => {
  const [dimension, setdimension] = useState([]);
  const dispatch = useDispatch();


  useEffect(()=>{
   dispatch(addDimensionItem(dimension));

  },[dimension])

  const [{ isOver }, dropRef] = useDrop({
    accept: "data",
    drop: (item) => {
      setdimension((dimension) => {
        return !dimension?.some((el) => el.name === item.name) &&
          item.function === "dimension"
          ? [...dimension, item]
          : [...dimension];
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });


  const clearDimensions = () => {
    setdimension([]);
    dispatch(clearDimensions())
  };
  const setDimensionsData = () => {
    return (
      <>
        {dimension.map((item, itemId) => (
          <Items id={item.id} key={itemId} item={item} />
        ))}
        {isOver && (
          <p className="alert alert-info p-1" role="alert">
            Drop dimension only here
          </p>
        )}
      </>
    );
  };
  return (
    <div ref={dropRef}>
      <h3> Dimensions</h3>

      <ItemsContainer
        dataItemsList={setDimensionsData()}
        onClear={clearDimensions}
      />
    </div>
  );
};

export default Dimensions;
