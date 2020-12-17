import { getDataOfArtist } from "../../api/api";

const SHOW_INFO_OF_ARTIST = "SHOW_INFO_OF_ARTIST/TEST";

const initialState = {
  artist: [],
};

const infoArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO_OF_ARTIST: {
      return {
        ...state,
        artist: action.artist,
      }
    }
    default: return state;
  }
};

export default infoArtistReducer;

export const showInfoArtist = (artist) => {
  return {
    type: SHOW_INFO_OF_ARTIST,
    artist,
  };
};

export const getInfoArtist = (userName) => {
  return async (dispatch) => {
    const response = await getDataOfArtist.dataAPI(userName);
    dispatch(showInfoArtist(response));
  };
};