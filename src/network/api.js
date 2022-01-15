import { axiosInstance } from "./index";

export const getColoumData = async () => {
  return await axiosInstance.get(`columns`);
};

export const postPlotterData = async (payload) =>
    await axiosInstance.post(`data`, payload);

