import React from "react";
import UserListItem from "./UserListItem";
import { ListGroup, ListGroupItem } from "reactstrap";

const UserList = ({ users, onDeleteUserClick }) => {
  console.log(users);
  return (
    <ListGroup>
      {users.items.map((user) => {
        return (
          <ListGroupItem key={user.id}>
            <UserListItem onDeleteClick={onDeleteUserClick} user={user} />
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UserList;
