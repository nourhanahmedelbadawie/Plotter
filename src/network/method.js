import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as apis from "./api";

export const getColoumData = async () => {
  let response = null;
  try {
    response = await apis.getColoumData();

    toast.success("An error occured", {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch {
    toast.error("An error occured", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  return response;
};

export function setPlotterData(payload) {
  let response = null;

  try {
    response = apis.postPlotterData(payload);
  } catch {
    toast.error("An error occured", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  return response;
}
