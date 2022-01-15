import React from "react";
import PropTypes from "prop-types";

import styles from "./ItemsContainer.module.scss";
import { Button } from "@mui/material";

const ItemsContainer = ({ dataItemsList, onClear }) => {
  return (
    <div className=" d-flex align-items-center justify-content-between" >
      <div className={`${styles.wrapper} d-flex mb-2 mr-2`}>
      {dataItemsList}

      </div>
      <Button variant="contained" onClick={onClear}>Clear</Button>
    </div>
  );
};

export default ItemsContainer;

ItemsContainer.propTypes = {
  dataItemsList: PropTypes.elementType,
  onClear: PropTypes.func,
};
