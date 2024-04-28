import { render, waitFor } from "@testing-library/react"
import axios from "axios"
import Thumbnail from "./Thumbnail"
import { imgDataArray } from "../../mockData"
import { AppProvider } from "../../context/use-context"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

test("image thumbnails have been rendered", async () => {
  const thumbnail = render(
    <AppProvider>
      <Thumbnail data={imgDataArray} />
    </AppProvider>,
  )

  mockedAxios.get.mockResolvedValue({
    data: imgDataArray,
  })

  await waitFor(async () => {
    const imgThumbnailOne = (await thumbnail.findByTestId(
      "image-thumbnail-Road",
    )) as HTMLImageElement
    const imgThumbnailTwo = (await thumbnail.findByTestId(
      "image-thumbnail-Mountain",
    )) as HTMLImageElement
    const imgThumbnailThree = (await thumbnail.findByTestId(
      "image-thumbnail-Beach",
    )) as HTMLImageElement

    expect(imgThumbnailOne.src).toContain("1655827671-road-naked.jpg")
    expect(imgThumbnailTwo.src).toContain("1655815211-mountain-naked.jpg")
    expect(imgThumbnailThree.src).toContain("1655822607-beach-naked.jpg")
    thumbnail.unmount()
  })
})
