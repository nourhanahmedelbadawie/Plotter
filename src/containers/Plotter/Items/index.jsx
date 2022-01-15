import React from "react";
import { useDrag } from "react-dnd";

import styles from "./Items.module.scss";

const Items = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "data",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <ul ref={dragRef} className="d-flex alig-items-center mb-0">
      <li className={styles.item}> {name}</li>
      {isDragging && "+"}
    </ul>
  );
};
export default Items;
