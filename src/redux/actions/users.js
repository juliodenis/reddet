export const START_GET_USER = "START_GET_USER";
export const SUCCESS_GET_USER = "SUCCESS_GET_USER";

export const START_UPDATE_USER = "START_UPDATE_USER";
export const SUCCESS_UPDATE_USER = "SUCCESS_UPDATE_USER";

export const startGetUser = (payload) => {
  return {
    type: START_GET_USER,
    ...payload,
  };
};

export const successGetUser = (payload) => {
  return {
    type: SUCCESS_GET_USER,
    ...payload,
  };
};

export const startUpdateUser = (payload) => {
  return {
    type: START_UPDATE_USER,
    payload,
  };
};
export const successUpdateUser = (payload) => {
  return {
    type: SUCCESS_UPDATE_USER,
    payload,
  };
};
