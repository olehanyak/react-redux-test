import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { tracksList } from "../../redux/reducers/tracksReducer";
import { tracksSelector } from "../../redux/selectors/tracksSelector";
import Spinner from "../Spinner";

const Home = (props) => {
  if (!props.track) <Spinner />;
  
  useEffect(() => {
    props.tracksList(props.tracks);
  }, []);

  let allTracks = props.tracks;

  return (
    <div className="track-list">
      {allTracks.map((track) => (
        <div>
          <div>
            <NavLink to={"/ContainerArtist/" + track.artist.name}>{`${track.artist.name}`}</NavLink>
          </div>
          <p>{`${track.name}`}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ tracks: tracksSelector(state) });

const mapDispatchToProps = {
  tracksList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
