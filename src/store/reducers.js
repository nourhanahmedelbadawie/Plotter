let intialState = {
  measureItems: null,
  dimensionItems: null,
  dimensionMeasureGraph: [],
};

const plotterReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADDMEASUREITEM":
      return { ...state, measureItems: [...action.payload] };
    case "ADDDIMENSIONITEM":
      return { ...state, dimensionItems: [...action.payload] };
    case "DIMENSIONMEASUREGRAPH":
      return {
        ...state,
        dimensionMeasureGraph: [...state.dimensionMeasureGraph, action.payload],
      };
    case "CLEARDIMENSIONITEMS":
      return { ...state, dimensionItems: null, dimensionMeasureGraph: [] };
    case "CLEARDMEASUREITEMS":
      return { ...state, measureItems: null, dimensionMeasureGraph: [] };

    default:
      return state;
  }
};

export default plotterReducer;
