import React, { useEffect } from "react";
import Items from "../Items";
import Columns from "../../../components/Columns";

import { getColoumData} from "../../../network/method";

const Column = () => {
  const PETS = [
    { id: 1, name: "dog" },
    { id: 2, name: "cat" },
    { id: 3, name: "fish" },
    { id: 4, name: "hamster" },
  ];

  useEffect(()=>{
    getColoumData()
  },[])
  const setColumnsData = () => {
    return (
      <>
      
      {PETS.map((pet) => (
        <Items key={pet.id} draggable id={pet.id} name={pet.name} />
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
