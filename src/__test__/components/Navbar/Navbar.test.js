import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import ProviderMock from "../../../__mocks__/ProviderMock";
import Navbar from "../../../components/Navbar/Navbar";

describe("<Navbar/>", () => {
  test("Should render the Navbar component", () => {
    const navbar = shallow(
      <ProviderMock>
        <Navbar />
      </ProviderMock>
    );
    expect(navbar.length).toEqual(1);
  });
});

describe("Navbar Snapshot", () => {
  test("Check Navbar Snapshot", () => {
    const navbar = create(
      <ProviderMock>
        <Navbar />
      </ProviderMock>
    );
    expect(navbar.toJSON()).toMatchSnapshot();
  });
});
