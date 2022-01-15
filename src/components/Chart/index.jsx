import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Chart = ({ y_axisName, X_axisName, dataChart }) => {
  
  return (
    <>
      <div>
        <div >
          <section style={{ width: "100%", height: "400px" }}>
            <ResponsiveContainer>
              <LineChart
                data={dataChart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey={X_axisName} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey={y_axisName}
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                {/* <Line type="monotone" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Chart;

Chart.propTypes = {
  y_axisName: PropTypes.string,
  X_axisName: PropTypes.string,
  dataChart: PropTypes.array,
};
