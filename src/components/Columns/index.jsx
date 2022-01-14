import React from "react";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

import styles from "./Columns.module.scss";

const Columns = ({ dragRef, name }) => {
  return (
    <div className={styles.wrapper} ref={dragRef}>
      <h4 className="text-center">Columns</h4>
      <Paper elevation={3}>{name}</Paper>
    </div>
  );
};

export default Columns;

Columns.propTypes = {
  dragRef: PropTypes.object,
  name: PropTypes.string,
};
