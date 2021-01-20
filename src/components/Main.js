import React, { Component } from "react";
import UserList from "./AlbumList";
import { connect } from "react-redux";
import {
  getPhotosRequest,
  photosError,
  getPhotosOfAlbumsRequest,
} from "../actions/albums";
import { Alert } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.props.getPhotosRequest();
  }

  handleCloseAlert = () => {
    this.props.photosError({
      error: "",
    });
  };

  render() {
    const albums = this.props.albums;
    return (
      <div style={{ margin: "0 auto", padding: "20px" }}>
        <h2>Albums</h2>
        <Alert
          color="danger"
          isOpen={!!this.props.albums.error}
          toggle={this.handleCloseAlert}
        >
          {this.props.albums.error}
        </Alert>
        {!!albums.items && !!albums.items.length && (
          <UserList
            onSelectAlbumClick={this.props.handleSelectAlbumClick}
            albums={albums}
          />
        )}
      </div>
    );
  }
}

export default connect(({ albums }) => ({ albums }), {
  getPhotosRequest,
  photosError,
  getPhotosOfAlbumsRequest,
})(Main);
