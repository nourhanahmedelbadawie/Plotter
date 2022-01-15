import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../../../components/Chart";

import { setPlotterData } from "../../../network/method";

const GraphView = () => {
  const [graphData, setGraphData] = useState(null);

  const dimensionItems = useSelector((state) => state.dimensionItems);
  const measureItems = useSelector((state) => state.measureItems);

  useEffect(() => {
    if (
      dimensionItems?.length === measureItems?.length &&
      dimensionItems?.length > 0
    ) {
      getGraphData();
    }
  }, [dimensionItems, measureItems]);

  useEffect(() => {
    return () => {
      setGraphData(null);
    };
  }, []);

  const getGraphData = async () => {
    let payload = {
      dimension: dimensionItems[dimensionItems?.length - 1]?.name,
      measures: [measureItems[measureItems?.length - 1]?.name],
    };

    let response = await setPlotterData(payload);
    setGraphData(response.data);
    formateDataToChart()
  };

  const formateDataToChart = () => {
    let dataToChart = graphData[0]?.values.map((value, valueId) => {
      return {
        [graphData[0].name]: value,
        [graphData[1].name]: graphData[1].values[valueId],
      };
    });
    return dataToChart;
  };

  return (
    <div className=" my-4">
      {graphData ? (
        <Chart
          dataChart={formateDataToChart()}
          X_axisName={graphData[0].name}
          y_axisName={graphData[1].name}
        />
      ) : (
        <div class="alert alert-warning" role="alert">
          You should enter equal data length
        </div>
      )}
    </div>
  );
};

export default GraphView;

// })
// {
//   name: "developer 3",
//   "name1": 5,
//   "name2": 6,
//   amt: 3
// },
// {
//   name: "developer 4",
//   "name1": 7,
//   "name2": 8,
//   amt: 4
// },

// }
// {
//   "name": "Product",
//   "values": [
//   "Diskette",
//   "Memory Card",
//   "HDTV Tuner",
//   "Flat Panel Graphics Monitor",
//   "Digital Camera",
//   "Minitower Speaker",
//   "Extension Cable",
//   "Y Box"
//   ]
//   },
//   {
//   "name": "Cost",
//   "values": [
//   333.08,
