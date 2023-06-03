const initialState = {
    dataMovie: [],
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          dataMovie: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  