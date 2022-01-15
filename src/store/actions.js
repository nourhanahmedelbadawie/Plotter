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

export const addDimensionMeasureGraph = (payload) => {
  return {
    type: "DIMENSIONMEASUREGRAPH",
    payload,
  };
};

export const clearDimensionItems = (payload) => {
  return {
    type: "CLEARDIMENSIONITEMS",
    payload,
  };
};

export const clearMeasureItems = (payload) => {
  return {
    type: "CLEARDMEASUREITEMS",
    payload,
  };
};
