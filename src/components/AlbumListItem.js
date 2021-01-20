import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const UserListItem = ({ albums, onSelectAlbumClick, selectedAlbum }) => {
  const stringToHslColor = (str = "") => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    return `hsl(${h},60%,80%)`;
  };

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
          background: stringToHslColor(albums.title),
        }}
      >
        {!!albums && !!albums.title ? albums.title : ""}
      </div>
      <div style={{ margin: "auto 0", flexGrow: 1, paddingLeft: "10px" }}>
        {albums.id} {albums.title}
      </div>
      <div style={{ margin: "auto 0" }}>
        <Link to={`/AlbumDetails/${albums.id}`}>
          <Button
            size="sm"
            color="danger"
            outline
            onClick={() => onSelectAlbumClick(albums)}
          >
            Open
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserListItem;
