import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/ProviderMock";
import PostMock from "../../../__mocks__/PostMock";
import Post from "../../../components/Posts/Post";

describe("<Post/>", () => {
  test("Should render the Post component", () => {
    const post = shallow(
      <ProviderMock>
        <Post />
      </ProviderMock>
    );
    expect(post.length).toEqual(1);
  });
});
