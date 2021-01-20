import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AlbumDetails from "./AlbumDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: "",
    };
  }

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleSelectAlbumClick = (album) => {
    this.setState({ album: album });
    localStorage.setItem("id", album.id);
  };

  handleCloseAlert = () => {
    this.props.photosError({
      error: "",
    });
  };

  render() {
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "1000px" }}>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Albums</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Main handleSelectAlbumClick={this.handleSelectAlbumClick} />
          </Route>
          <Route
            exact
            path="/AlbumDetails/:id"
            render={(props) => {
              let cardPosition = props.location.pathname.replace(
                "/AlbumDetails/",
                ""
              );
              return (
                <AlbumDetails id={cardPosition} album={this.state.album} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
