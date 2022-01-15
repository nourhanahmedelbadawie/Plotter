import React, { useEffect, useState } from "react";

import Items from "../Items";
import Columns from "../../../components/Columns";
import { getColoumData } from "../../../network/method";

const Column = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    getAllColoumData();
  }, []);

  const getAllColoumData = async () => {
    let response = await getColoumData();
    setColumns(response.data);
  };

  const setColumnsData = () => {
    return (
      <>
        {columns?.length > 0 &&
          columns.map((column, columnId) => (
            <Items key={columnId} draggable id={columnId} item={column} />
          ))}
      </>
    );
  };
  return (
    <div>
      <Columns dataListItems={setColumnsData()} />
    </div>
  );
};

export default Column;
