import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as apis from "./api";

export function getColoumData() {
  try {
    const response = apis.getColoumData();
    console.log(response)
    console.log(process.env.REACT_APP_API_BASE_URL)

  } catch {
    toast.error("An error occured", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function setPlotterData() {
  try {
    const response = apis.postPlotterData();
  } catch {
    toast.error("An error occured", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
