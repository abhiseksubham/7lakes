import React, { Component } from "react";
import { getPhotosOfAlbumsRequest } from "../actions/albums";
import { connect } from "react-redux";
// Need to make cards here
// https://material-ui.com/components/cards/
class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    this.props.getPhotosOfAlbumsRequest(props.id);
    console.log(props);
  }
  render() {
    const photos = this.props.users.photos;
    return (
      <>
        <div>
          {this.props.album && (
            <div className="container album">
              <div>Selected Album</div>
              <div>Album Id:{this.props.album.id}</div>
              <div>Album Title:{this.props.album.title}</div>
            </div>
          )}
          <div className="main">
            {!!photos &&
              photos.map((photo) => {
                return (
                  <>
                    <div className="cards">
                      <div className="cardstart">
                        <div className="id">
                          <b>Id:{photo.id}</b>
                        </div>
                        <div className="text">Title:{photo.title}</div>
                        <div>
                          <img src={photo.thumbnailUrl}></img>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getPhotosOfAlbumsRequest,
})(AlbumDetails);
