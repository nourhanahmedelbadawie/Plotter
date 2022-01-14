import React from "react";

import MeasurementData from "./MeasurementData";
import GraphView from "./GraphView";

const Plotter = () => {
  return (
    <div>
      <MeasurementData />
      <GraphView />
    </div>
  );
};

export default Plotter;
