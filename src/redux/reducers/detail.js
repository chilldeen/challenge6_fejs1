import { FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAILURE } from '../actions/detail';
  
const initialState = {
    detail: {},
    loading: true,
    error: null,
};
  
const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_DETAIL_SUCCESS:
            return { ...state, loading: false, detail: action.payload };
        case FETCH_DETAIL_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};
  
export default detailReducer;
  