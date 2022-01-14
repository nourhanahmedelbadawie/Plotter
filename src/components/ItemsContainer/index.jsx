import React from "react";
import PropTypes from "prop-types";

import styles from "./ItemsContainer.module.scss";


const ItemsContainer = ({dragRef , name}) => {
  return (
    <div className={styles.wrapper} ref={dragRef}>
      {name}
      ff
    </div>
  );
};

export default ItemsContainer;

ItemsContainer.propTypes = {
  dragRef: PropTypes.object,
  name: PropTypes.string,
};


