import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../../__mocks__/ProviderMock";
import PostMock from "../../../__mocks__/PostMock";
import ModalCreatePost from "../../../components/ModalCreatePost/ModalCreatePost";

describe("<CreatePost/>", () => {
  test("should render the ModalCreatePost component", () => {
    const createPost = shallow(
      <ProviderMock>
        <ModalCreatePost />
      </ProviderMock>
    );
    expect(createPost.length).toEqual(1);
  });
});
