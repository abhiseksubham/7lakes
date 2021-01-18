import React, { Component } from "react";
import { getPhotosOfAlbumsRequest } from "../actions/users";
import { connect } from "react-redux";
// Need to make cards here
// https://material-ui.com/components/cards/
class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    this.props.getPhotosOfAlbumsRequest();
  }
  render() {
    const photos = this.props.users.photos;
    return (
      <>
        {!!photos &&
          photos.map((photo) => {
            return (
              <>
                <div>
                  <span>{photo.id}</span>
                  {/* <span>{photo.title}</span> */}
                  <img src={photo.thumbnailUrl}></img>
                </div>
              </>
            );
          })}
      </>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getPhotosOfAlbumsRequest,
})(AlbumDetails);
