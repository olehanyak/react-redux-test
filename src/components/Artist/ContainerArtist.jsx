import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { artistSelector } from "../../redux/selectors/artistSelector";
import { getInfoArtist } from "../../redux/reducers/artistReducer";
import InfoArtist from "./InfoArtist";

const ContainerArtist = (props) => {
  const [nameArtist, setNameArtist] = useState("");

  const userName = props.match.params.userName;

  useEffect(() => {
    setNameArtist(userName);
    props.getInfoArtist(userName);
  }, []);

  return (
    <div>
      <h3 className="title-name-artist">{nameArtist}</h3>
      <InfoArtist info={props.infoArtist} />
    </div>
  );
};

const mapStateToProps = (state) => ({ infoArtist: artistSelector(state) });

const mapDispatchToProps = {
  getInfoArtist,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ContainerArtist);
