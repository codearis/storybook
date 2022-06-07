import TestComponent from "../components/TestComponent";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("renders without crashing", () => {
  it("should be able to show the h1 element", () => {
    render(<TestComponent />);
    const h1Element = screen.getByText(/Hello world!/i);
    expect(h1Element).toBeInTheDocument();
  });
});
