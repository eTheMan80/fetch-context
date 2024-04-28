import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Dropdown from "./Dropdown"
import { imgDataArray } from "../../mockData"

test("user is able to select the first element from the dropdown", async () => {
  const dropdown = render(
    <Dropdown data={imgDataArray[0]} setImg={() => null} />,
  )

  await userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8ko blue" }),
  )

  expect(
    (screen.getByRole("option", { name: "8ko blue" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select the second element from the dropdown", async () => {
  const dropdown = render(
    <Dropdown data={imgDataArray[0]} setImg={() => null} />,
  )

  await userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8ko brown" }),
  )

  expect(
    (screen.getByRole("option", { name: "8ko brown" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select an element from the middle of the dropdown", async () => {
  const dropdown = render(
    <Dropdown data={imgDataArray[0]} setImg={() => null} />,
  )

  await userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "8kop rose" }),
  )

  expect(
    (screen.getByRole("option", { name: "8kop rose" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})

test("user is able to select the last element from the dropdown", async () => {
  const dropdown = render(
    <Dropdown data={imgDataArray[0]} setImg={() => null} />,
  )

  await userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "4kop smoke" }),
  )

  expect(
    (screen.getByRole("option", { name: "4kop smoke" }) as HTMLOptionElement)
      .selected,
  ).toBe(true)
  dropdown.unmount()
})
