import React from "react";
import UserListItem from "./AlbumListItem";
import { ListGroup, ListGroupItem } from "reactstrap";

const UserList = ({ users, onDeleteUserClick, selectedAlbum }) => {
  console.log(users);
  return (
    <ListGroup>
      {users.items.map((user) => {
        return (
          <ListGroupItem key={user.id}>
            <UserListItem
              onDeleteClick={onDeleteUserClick}
              user={user}
              selectedAlbum={selectedAlbum}
            />
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UserList;
