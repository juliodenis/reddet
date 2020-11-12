export const START_CREATE_COMMENT = "START_CREATE_COMMENT";
export const SUCCESS_CREATE_COMMENT = "SUCCESS_CREATE_COMMENT";

export const START_GET_COMMENTS = "START_GET_COMMENTS";
export const SUCCESS_GET_COMMENTS = "SUCCESS_GET_COMMENTS";

export const startCreateComment = (payload) => {
  return {
    type: START_CREATE_COMMENT,
    ...payload,
  };
};

export const successCreateComment = (payload) => {
  return {
    type: SUCCESS_CREATE_COMMENT,
    ...payload,
  };
};

export const startGetcomments = (payload) => {
  return {
    type: START_GET_COMMENTS,
    ...payload,
  };
};

export const successGetCommens = (payload) => {
  return {
    type: SUCCESS_GET_COMMENTS,
    ...payload,
  };
};
