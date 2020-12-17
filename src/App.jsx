import React from "react";
import { Route, Switch, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import Home from "./components/Home/Home";
import ContainerArtist from "./components/Artist/ContainerArtist";
import SearchTrack from "./components/SearchTracks/SearchTrack";

const App = () => {
  return (
    <div className="container">
      <div>
        <div className="container__navLinks">
          <NavLink className="container__nav" to="/home">
            Home{" "}
          </NavLink>
          <NavLink className="container__nav" to="/searchTrack">
            {" "}
            Search
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route path="/ContainerArtist/:userName?" render={() => <ContainerArtist />} />
          <Route path="/searchTrack" render={() => <SearchTrack />} />
        </Switch>
      </div>
    </div>
  );
};

export default compose(withRouter)(App);
