import React from "react";
import Spinner from "./Spinner";

const TracksList = ({ tracksList }) => {
  if (!tracksList) <Spinner />;
  return <div className="tracks-list">{tracksList}</div>;
};

export default TracksList;
