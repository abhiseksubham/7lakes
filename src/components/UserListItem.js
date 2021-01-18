import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";

const UserListItem = ({ user, onDeleteClick }) => {
  const stringToHslColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };
  console.log(user);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          margin: "auto 0",
          textAlign: "center",
          height: "40px",
          width: "40px",
          lineHeight: "40px",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          background: stringToHslColor(user.title),
        }}
      >
        {!!user && !!user.title ? user.title : ""}
      </div>
      <div style={{ margin: "auto 0", flexGrow: 1, paddingLeft: "10px" }}>
        {user.id} {user.title}
      </div>
      <div style={{ margin: "auto 0" }}>
        <Link to={`/AlbumDetails/${user.id}`}>
          <Button size="sm" color="danger" outline>
            Open
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserListItem;
