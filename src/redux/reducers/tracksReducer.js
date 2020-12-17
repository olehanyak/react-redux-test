import { getDataOfTopTracks } from "../../api/api";

const SET_TRACKS = "SET_TRACKS/TEST";

const initialState = {
  tracks: [],
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS: {
      return {
        ...state,
        tracks: action.tracks,
      }
    }
    default: return state;
  }
};

export default tracksReducer;

export const setTracks = (tracks) => {
  return {
    type: SET_TRACKS,
    tracks,
  };
};

export const tracksList = () => {
  return async (dispatch) => {
    const response = await getDataOfTopTracks.dataAPI();
    dispatch(setTracks(response.tracks.track));
  };
};