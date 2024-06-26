import { render } from "@testing-library/react"
import SceneImage from "./SceneImage"
import { AppProvider } from "../../context/use-context"

test("default image is display when component renders", async () => {
  const imgObj = {
    src: "https://www.datocms-assets.com/45158/1655827671-road-naked.jpg?auto=format&h=1400&w=1400",
    srcSet:
      "https://www.datocms-assets.com/45158/1655827671-ro…71-road-naked.jpg?auto=format&h=1400&w=1400 1026w",
  }
  const imgScene = render(
    <AppProvider>
      <SceneImage img={imgObj} />
    </AppProvider>,
  )

  const defaultImg = (await imgScene.findByTestId(
    "default-image",
  )) as HTMLImageElement
  expect(defaultImg.src).toContain("1655827671-road-naked")
  imgScene.unmount()
})
