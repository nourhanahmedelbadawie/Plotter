import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import { addMeasureItem } from "../../../store/actions";
import ItemsContainer from "../../../components/ItemsContainer";
import Items from "../Items";

const Measures = () => {
  const dispatch = useDispatch();
  const [measure, setmeasure] = useState([]);

  useEffect(() => {
    dispatch(addMeasureItem(measure));
  }, [measure]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "data",
    drop: (item) =>
      setmeasure((measure) => {
        return !measure?.some((el) => el.name === item.name) &&
          item.function === "measure"
          ? [...measure, item]
          : [...measure];
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const clearMeasures = () => {
    setmeasure([]);
    dispatch(clearMeasures())

  };
  const setMeasuresData = () => {
    return (
      <>
        {measure.map((item, itemId) => (
          <Items id={item.id} key={itemId} item={item} />
        ))}
        {isOver && (
          <p className="alert alert-info p-1" role="alert">
            Drop measure only here
          </p>
        )}
      </>
    );
  };
  return (
    <div ref={dropRef}>
      <h3> Measures</h3>
      <ItemsContainer
        dataItemsList={setMeasuresData()}
        onClear={clearMeasures}
      />
    </div>
  );
};

export default Measures;
