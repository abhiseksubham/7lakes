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

  handleDeleteUserClick = (album) => {
    this.setState({ album: album });
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
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
            <Main handleDeleteUserClick={this.handleDeleteUserClick} />
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
