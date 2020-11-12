export const START_LOGIN_USER = "START_LOGIN_USER";
export const SUCCESS_LOGED_USER = "SUCCESS_LOGED_USER";
export const START_LOGOUT_USER = "START_LOGOUT_USER";
export const INIT_USERDATA = "INIT_USERDATA";

export const startLoginUser = (payload) => {
  return {
    type: START_LOGIN_USER,
    ...payload,
  };
};

export const startLogoutUser = () => {
  return {
    type: START_LOGOUT_USER,
  };
};

export const successLogedUser = (payload) => ({
  type: SUCCESS_LOGED_USER,
  ...payload,
});
