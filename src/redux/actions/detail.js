import tmdbApi from "../../api/tmdbApi";

export const FETCH_DETAIL_REQUEST = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILURE = 'FETCH_DETAIL_FAILURE';

export const fetchDetail = (id) => async (dispatch) => {
    dispatch({ type: FETCH_DETAIL_REQUEST });

    try {
        const response = await tmdbApi.detail('movie', id);
        dispatch({ type: FETCH_DETAIL_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: FETCH_DETAIL_FAILURE, payload: error.message });
    }
};
