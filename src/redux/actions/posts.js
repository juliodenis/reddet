// Getting all posts
export const START_GET_POSTS = "START_GET_POSTS";
export const SUCCESS_GET_POSTS = "SUCCESS_GET_POSTS";

// Getting one post
export const START_GET_ONE_POST = "START_GET_ONE_POST";
export const SUCCESS_GET_ONE_POST = "SUCCESS_GET_ONE_POST";

// Creating a new post
export const START_CREATE_POST = "START_CREATE_POST";
export const SUCCESS_CREATE_POST = "SUCCESS_CREATE_POST";

//Deleting a post
export const START_DELETE_POST = "START_DELETE_POST";
export const SUCCESS_DELETE_POST = "SUCCESS_DELETE_POST";

// Getting all posts
export const startGetPosts = (payload) => {
  return {
    type: START_GET_POSTS,
    ...payload,
  };
};

export const successGetPosts = (payload) => {
  return {
    type: SUCCESS_GET_POSTS,
    ...payload,
  };
};

// Getting one post
export const startGetOnePost = (payload) => {
  return {
    type: START_GET_ONE_POST,
    payload,
  };
};

export const successGetOnePost = (payload) => {
  return {
    type: SUCCESS_GET_ONE_POST,
    payload,
  };
};

// Creating a new post
export const startCreatePost = (payload) => {
  return {
    type: START_CREATE_POST,
    ...payload,
  };
};

export const successCreatePost = (payload) => {
  return {
    type: SUCCESS_CREATE_POST,
    ...payload,
  };
};

//Deleting a post
export const startDeletePost = (payload) => {
  return {
    type: START_DELETE_POST,
    payload,
  };
};

export const successDeletePost = (payload) => {
  return {
    type: {
      type: SUCCESS_DELETE_POST,
      payload,
    },
  };
};
