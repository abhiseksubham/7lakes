import axios from "axios";

export const getAlbums = () => {
  return axios.get("/albums", {});
};

export const getPhotos = (id = 1) => {
  return axios.get("/photos", {
    params: {
      albumId: id,
    },
  });
};
