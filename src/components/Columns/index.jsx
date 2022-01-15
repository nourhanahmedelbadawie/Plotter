import React from "react";
import PropTypes from "prop-types";

import styles from "./Columns.module.scss";

const Columns = ({ dataListItems }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <h4 className="p-3 ">Columns</h4>
      {dataListItems}
    </div>
  );
};

export default Columns;

Columns.propTypes = {
  dragRef: PropTypes.object,
  name: PropTypes.string,
};
