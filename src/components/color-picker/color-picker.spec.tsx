import { render, screen } from "@testing-library/react";
import { ColorPicker } from "./color-picker";
import userEvent from "@testing-library/user-event";

describe("ColorPicker", () => {
  test("should render a label", () => {
    const label = "My Label";
    render(
      <ColorPicker
        color="#ffffff"
        label={label}
        onChange={() => {}}
        testIdPrefix="picker"
      />,
    );

    expect(screen.queryByText(label)).toBeInTheDocument();
  });

  test("should open popover when click on the label", async () => {
    const label = "My Label";
    render(
      <ColorPicker
        color="#ffffff"
        label={label}
        onChange={() => {}}
        testIdPrefix="picker"
      />,
    );

    const labelEl = screen.getByText(label);
    await userEvent.click(labelEl);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  test("should change color on change it on popover", async () => {
    const onChange = vi.fn();
    const label = "My Label";
    render(
      <ColorPicker
        color="#ffffff"
        label={label}
        onChange={onChange}
        testIdPrefix="picker"
      />,
    );

    const button = screen.getByTestId("picker-color");
    await userEvent.click(button);

    const hexInput = screen.getByLabelText("hex");
    await userEvent.clear(hexInput);
    await userEvent.type(hexInput, "2200FF");

    expect(onChange).toHaveBeenLastCalledWith("#2200ff");
  });
});
