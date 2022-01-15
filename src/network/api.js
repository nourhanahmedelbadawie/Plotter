import { axiosInstance } from "./index";

export const getColoumData = () => axiosInstance.get(`columns`);

export const postPlotterData = (payload) => axiosInstance.post(`data`, payload);
