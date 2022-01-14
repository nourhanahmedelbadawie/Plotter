import React from "react";
import { Link } from "react-router-dom";

const Linktag = ({ to, text, ...props }) => {
  return (
    <Link to={to} className={StyleSheet.link} props>
      {text}
    </Link>
  );
};

export default Linktag;
