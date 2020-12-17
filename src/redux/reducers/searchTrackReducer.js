import { getTrackSearch } from "../../api/api";

const SHOW_TRACK_SEARCH_RESULT = "SHOW_TRACK_SEARCH_RESULT/TEST";

const initialState = {
  trackName: [],
};

const searchTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TRACK_SEARCH_RESULT: {
      return {
        ...state,
        trackName: action.trackName,
      }
    }
    default: return state;
  }
};

export default searchTrackReducer;

export const showSearchResult = (trackName) => {
  return {
    type: SHOW_TRACK_SEARCH_RESULT,
    trackName,
  };
};

export const getSearchResult = (trackName) => {
  return async (dispatch) => {
    const response = await getTrackSearch.dataAPI(trackName);
    dispatch(showSearchResult(response.results.trackmatches.track));
  };
};