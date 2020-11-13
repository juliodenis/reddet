const reducer = (state, action) => {
  switch (action.type) {
    case "START_GET_POSTS":
      return {
        ...state,
        action,
      };
    case "SUCCESS_GET_POSTS":
      return {
        ...state,
        posts: action.results,
      };
    case "START_GET_ONE_POST":
      return {
        ...state,
        action,
      };
    case "SUCCESS_GET_ONE_POST":
      return {
        ...state,
        posts: action.results,
      };
    case "SUCCESS_CREATE_POST":
      return {
        ...state,
        posts: [...action.results],
      };

    case "START_DELETE_POST":
      return {
        ...state,
      };
    case "SUCCESS_UPDATE_USER":
      return {
        ...state,
      };
    case "SUCCESS_DELETE_USER":
      return {
        ...state,
      };
    case "SUCCESS_GET_COMMENTS":
      return {
        ...state,
        comments: [...action.results],
      };
    case "SUCCESS_GET_COMMENTS":
      return {
        ...state,
        comments: action.results,
      };
    case "START_GET_COMMENTS":
      return {
        ...state,
        action,
      };
    case "SUCCESS_GET_COMMENTS":
      return {
        ...state,
        posts: action.results,
      };
    case "SUCCESS_LOGED_USER":
      return {
        ...state,
        userLogged: action.payload,
      };
    case "START_LOGOUT_USER":
      return {
        ...state,
        id: null,
        userId: null,
      };
    case "INIT_USERDATA":
      const { id, userId } = action.payload;
      return {
        ...state,
        id,
        userId,
      };
    case "START_GET_USER":
      return {
        ...state,
        action,
      };
    case "SUCCESS_GET_USER":
      return {
        ...state,
        users: action.result,
      };
    case "SET_POST_STATE":
      return {
        ...state,
        postStatus: action.payload,
      };
    case "SUCCESS_SET_POST_STATE":
      return {
        ...state,
        postStatus: action,
      };
    default:
      return state;
      break;
  }
};
export default reducer;
