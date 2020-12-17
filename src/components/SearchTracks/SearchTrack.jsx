import React, { useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { getSearchResult } from "../../redux/reducers/searchTrackReducer";
import TracksList from "../TracksList";
import { NavLink } from "react-router-dom";

const SearchTrack = (props) => {
  const name = props.match.params.trackName;
  const [track, setTrack] = useState(name);

  const onEnterTrackName = (e) => {
    setTrack(e.target.value);
  };

  const pushName = () => {
    props.getSearchResult(track);
  };

  let dataTrack = props.infoTrack.map((item) => (
    <li>
      {item.name} - {" "}
      <span>
        <NavLink className="name-artist" to={"/ContainerArtist/" + item.artist}>{item.artist}</NavLink>
      </span>
    </li>
  ));

  return (
    <div className="search-form">
      <input className="search-form__input" onChange={onEnterTrackName} type="text" defaultValue={track} />
      <button className="search-form__btn" onClick={pushName} type="button" className="btn btn-outline-info">
        search
      </button>
      <TracksList tracksList={dataTrack} />
    </div>
  );
};

const mapStateToProps = (state) => ({ infoTrack: state.searchPage.trackName });

const mapDispatchToProps = {
  getSearchResult,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(SearchTrack);
