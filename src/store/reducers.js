let intialState = {
  measureItems: null,
  dimensionItems: null,
};

const plotterReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADDMEASUREITEM":
      return { ...state, measureItems: [...action.payload] };
    case "ADDDIMENSIONITEM":
      return { ...state, dimensionItems: [...action.payload] };
    case "CLEARDIMENSIONS":
      return { ...state, dimensionItems: null };
    case "CLEARDMEASURES":
      return { ...state, measureItems: null };

    default:
      return state;
  }
};

export default plotterReducer;
