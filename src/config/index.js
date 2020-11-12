require("dotenv").config();

const {
  GET_ONE_USER,
  UPDATE_USER,
  GET_POSTS,
  CREATE_POST,
  DELETE_POST,
  GET_ONE_POST,
} = process.env;

const apiServer = {
  users: {
    get: GET_ONE_USER,
    update: UPDATE_USER,
  },
  posts: {
    get: GET_POSTS,
    post: CREATE_POST,
    delete: DELETE_POST,
    getOne: GET_ONE_POST,
  },
};

export default apiServer;
