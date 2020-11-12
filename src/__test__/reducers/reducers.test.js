import reducer from "../../redux/reducers";
import PostMock from "../../__mocks__/PostMock";

describe("Reducers", () => {
  test("Return initial state", () => {
    expect(reducer({}, "")).toEqual({});
  });

  test("START_GET_POSTS", () => {
    const initialState = {
      posts: [],
    };
    const payload = [];
    const action = {
      type: "START_GET_POSTS",
      payload,
    };
    const expected = { posts: [] };
    const sent = action.payload;

    expect(reducer(initialState, sent)).toEqual(expected);
  });
});
