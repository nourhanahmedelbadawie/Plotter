import React from "react";

import Measures from "../Measures";
import Dimensions from "../Dimensions";
import Column from "../Column";
import { Grid } from "@mui/material";

const MeasurementData = () => {
  return (
    <div>
      <Grid container spacing={2}>
      <Grid item xs={4}>
          <Column />
        </Grid>
        <Grid item xs={8}>
          <Measures />
          <Dimensions />
        </Grid>
   
      </Grid>
    </div>
  );
};

export default MeasurementData;
