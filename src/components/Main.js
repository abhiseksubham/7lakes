import React, { Component } from "react";
import UserList from "./AlbumList";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
  getPhotosOfAlbumsRequest,
} from "../actions/albums";
import { Alert } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <h2>Albums</h2>
        <Alert
          color="danger"
          isOpen={!!this.props.users.error}
          toggle={this.handleCloseAlert}
        >
          {this.props.users.error}
        </Alert>
        {!!users.items && !!users.items.length && (
          <UserList
            onDeleteUserClick={this.props.handleDeleteUserClick}
            users={users}
          />
        )}
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
  getPhotosOfAlbumsRequest,
})(Main);
