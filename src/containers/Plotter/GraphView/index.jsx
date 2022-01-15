import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../../../components/Chart";

import { setPlotterData } from "../../../network/method";
import { addDimensionMeasureGraph } from "../../../store/actions";

const GraphView = () => {
  const dispatch = useDispatch();

  const [graphDataView, setGraphDataView] = useState(false);

  const dimensionItems = useSelector((state) => state.dimensionItems);
  const measureItems = useSelector((state) => state.measureItems);
  const dimensionMeasureGraph = useSelector(
    (state) => state.dimensionMeasureGraph
  );

  useEffect(() => {
    dimensionItems?.length === measureItems?.length &&
    dimensionItems?.length > 0
      ? getGraphData()
      : setGraphDataView(false);
  }, [dimensionItems, measureItems]);

  useEffect(() => {
    return () => {
      setGraphDataView(false);
    };
  }, []);

  const getGraphData = async () => {
    let payload = {
      dimension: dimensionItems[dimensionItems?.length - 1]?.name,
      measures: [measureItems[measureItems?.length - 1]?.name],
    };

    let response = await setPlotterData(payload);
    setGraphDataView(true);
    formateDataToChart(response.data);
  };

  const formateDataToChart = (graphData) => {
    if (
      !dimensionMeasureGraph.some(
        (graphElement) =>
          graphElement.id === `${graphData[0].name + graphData[1].name}`
      )
    ) {
      let dataToChart = graphData[0]?.values.map((value, valueId) => {
        return {
          [graphData[0].name]: value,
          [graphData[1].name]: graphData[1].values[valueId],
        };
      });

      dispatch(
        addDimensionMeasureGraph({
          dataToChart,
          X_axisName: graphData[0].name,
          y_axisName: graphData[1].name,
          id: graphData[0].name + graphData[1].name,
        })
      );
    } else {
      return;
    }
  };

  return (
    <div className=" my-4">
      {graphDataView ? (
        <>
          {dimensionMeasureGraph?.map((graphElement, index) => (
            <>
              <div className="mb-2">
                <h4>
                  {" "}
                  <span class="badge bg-secondary">
                    {graphElement.X_axisName} VS {graphElement.y_axisName}{" "}
                  </span>
                </h4>
                <div class="alert alert-secondary" role="alert">
                  <p className="mb-1"> X-axis : {graphElement.X_axisName}</p>
                  <p> Y-axis : {graphElement.y_axisName}</p>
                </div>

                <Chart
                  dataChart={graphElement.dataToChart}
                  X_axisName={graphElement.X_axisName}
                  y_axisName={graphElement.y_axisName}
                  key={index}
                />
              </div>
            </>
          ))}
        </>
      ) : (
        <div className="alert alert-warning" role="alert">
          You should enter equal data length
        </div>
      )}
    </div>
  );
};

export default GraphView;
