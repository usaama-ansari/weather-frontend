import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Header } from "./index";

describe("Header", () => {
  it("Should render 'Add City' link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>,
    );
    const link = screen.getByText("Add city");
    expect(link).toBeDefined();
  });

  it("Should render 'Cities' link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>,
    );
    const link = screen.getByText("Cities");
    expect(link).toBeDefined();
  });
});
