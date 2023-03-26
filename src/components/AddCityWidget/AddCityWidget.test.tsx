import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddCityWidget } from ".";

describe("AddCityWidget", () => {
  afterEach(cleanup);

  it("Should render 'Add City Widget'", async () => {
    const renderedWidget = render(<AddCityWidget onAdd={jest.fn} />);
    expect(renderedWidget).toBeDefined();
  });

  it("Should render add city button", async () => {
    render(<AddCityWidget onAdd={jest.fn()} />);
    const addButton = screen.getByRole("button", { name: "Add" });
    expect(addButton).toBeDefined();
  });

  it("Should render city name text field with placeholder", async () => {
    render(<AddCityWidget onAdd={jest.fn()} />);
    const inputField = screen.getByPlaceholderText("Enter city");
    expect(inputField).toBeDefined();
  });

  it("Should Submit the newly added city", async () => {
    const submitHandler = jest.fn();
    render(<AddCityWidget onAdd={submitHandler} />);
    const inputField = screen.getByLabelText("city-input");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputField, { target: { value: "Delhi" } });
    expect(addButton).toBeInTheDocument();
    userEvent.click(addButton);
    expect(submitHandler).toHaveBeenCalledWith("Delhi");
  });
});
