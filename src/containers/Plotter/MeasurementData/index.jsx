import { Button } from "@mui/material";
import React from "react";

import Columns from "../../../components/Columns";
import ItemsContainer from "../../../components/ItemsContainer";

const MeasurementData = () => {
  return (
    <div>
      <div id="measures">
        <ItemsContainer dragRef={{ id: 1 }} ref="1" /> <Button>Clear</Button>
      </div>
      <div id="dimensions">
        <ItemsContainer dragRef={{ id: 1 }} ref="" /> <Button>Clear</Button>
      </div>
      <div id="column">
        <Columns />
      </div>
    </div>
  );
};

export default MeasurementData;
