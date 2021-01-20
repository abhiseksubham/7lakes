import React from "react";
import UserListItem from "./AlbumListItem";
import { ListGroup, ListGroupItem } from "reactstrap";

const AlbumList = ({ albums, onSelectAlbumClick, selectedAlbum }) => {
  return (
    <ListGroup>
      {albums.items.map((albums) => {
        return (
          <ListGroupItem key={albums.id}>
            <UserListItem
              onSelectAlbumClick={onSelectAlbumClick}
              albums={albums}
              selectedAlbum={selectedAlbum}
            />
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default AlbumList;
