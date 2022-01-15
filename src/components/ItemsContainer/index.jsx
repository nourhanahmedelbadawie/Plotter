import React from "react";
import PropTypes from "prop-types";

import styles from "./ItemsContainer.module.scss";
import { Button } from "@mui/material";

const ItemsContainer = ({ dataItemsList, onClear }) => {
  return (
    <div className=" d-flex align-items-center justify-content-between">
      <div className={`${styles.wrapper} d-flex  m-2 `}>{dataItemsList}</div>
      <Button variant="contained" className="ml-2" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};

export default ItemsContainer;

ItemsContainer.propTypes = {
  dataItemsList: PropTypes.element,
  onClear: PropTypes.func,
};
