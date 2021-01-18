import axios from "axios";

export const getUsers = () => {
  return axios.get("/albums", {
    // params: {
    //     limit: 1000
    // }
  });
};

export const getPhotos = (id = 1) => {
  return axios.get("/photos", {
    params: {
      albumId: id,
    },
  });
};

export const createUser = ({ firstName, lastName }) => {
  return axios.post("/users", {
    firstName,
    lastName,
  });
};

export const deleteUser = (userId) => {
  return axios.delete(`/users/${userId}`);
};
