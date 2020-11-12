export const SET_POST_STATE = "SET_POST_STATE";
export const SUCCESS_SET_POST_STATE = "SUCCESS_SET_POST_UPDATE";

export const setPostState = (payload) => {
  return {
    type: SET_POST_STATE,
    ...payload,
  };
};

export const successSetPostState = (payload) => {
  return {
    type: SUCCESS_SET_POST_STATE,
    ...payload,
  };
};
