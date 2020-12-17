import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import infoArtistReducer from "./reducers/artistReducer";
import searchTrackReducer from "./reducers/searchTrackReducer";
import tracksReducer from "./reducers/tracksReducer";

let reducers = combineReducers({
  tracksPage: tracksReducer,
  artistPage: infoArtistReducer,
  searchPage: searchTrackReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;