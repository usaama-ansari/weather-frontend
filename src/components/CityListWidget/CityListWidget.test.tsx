import { render, screen, cleanup, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CityListWidget } from ".";

describe("CityListWidget", () => {
  afterEach(cleanup);

  const cities = ["Delhi", "Aligarh", "Agra"];

  it("Should render correct number of cities in a list", async () => {
    render(
      <CityListWidget
        selectedCity=""
        onCitySelect={jest.fn()}
        cities={cities}
      />,
    );
    const list = screen.getByRole("list", {
      name: /cities/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  it("Should select correct city on list item click", async () => {
    const handler = jest.fn();
    render(
      <CityListWidget selectedCity="" onCitySelect={handler} cities={cities} />,
    );
    const list = screen.getByRole("list", {
      name: /cities/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    const single = items[0];
    userEvent.click(single);
    expect(handler).toHaveBeenCalledWith("Delhi");
  });
});
