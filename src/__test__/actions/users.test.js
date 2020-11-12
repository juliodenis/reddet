import { startGetUser } from "../../redux/actions/users";
import UserMock from "../../__mocks__/UserMock";

describe("startGetUser Action", () => {
  test("Should get one user", () => {
    const payload = UserMock;
    const expected = {
      type: "START_GET_USER",
      payload,
    };
    expect(startGetUser(payload)).toEqual(expected.payload);
  });
});
