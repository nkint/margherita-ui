import React from "react";
import { screen, render } from "@testing-library/react";
import { Toggle } from "../Toggle";

describe("Toggle Component", () => {
  it("Should work as expected", () => {
    const handleChange = jest.fn();
    render(
      <Toggle checked={false} disabled={false} onChange={handleChange}>
        My accessible Toggle
      </Toggle>
    );

    expect(screen.getByLabelText("My accessible Toggle")).toBeInTheDocument();
  });
});
