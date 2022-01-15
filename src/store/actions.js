export const addMeasureItem = (payload) => {
  return {
    type: "ADDMEASUREITEM",
    payload,
  };
};

export const addDimensionItem = (payload) => {
  return {
    type: "ADDDIMENSIONITEM",
    payload,
  };
};

export const clearDimensions = (payload) => {
  return {
    type: "CLEARDIMENSIONS",
    payload,
  };
};

export const clearMeasures = (payload) => {
  return {
    type: "CLEARDMEASURES",
    payload,
  };
};
