import React, { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Dropdown from "./components/Dropdown"
import SceneImage from "./components/SceneImage"
import ErrorBoundary from "./components/ErrorBoundary"
import { useContext } from "./context/use-context"
import { ValidationError } from "./App.interface"

function App() {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const { state, dispatch } = useContext()
  const { scene, img, imgIndex } = state
  const sceneImageToDisplay = scene && scene[imgIndex]

  const updateImgObj = (src: string, srcSet: string) => {
    dispatch({
      type: "updateImg",
      payload: {
        src,
        srcSet,
      },
    })
  }

  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json"

    async function fetchClientData() {
      try {
        const res = await axios.get(url)
        dispatch({ type: "updateScene", payload: res.data })
        dispatch({
          type: "updateImg",
          payload: {
            src: res.data[0].nakedEyeImage.responsiveImage.src,
            srcSet: res.data[0].nakedEyeImage.responsiveImage.srcSet,
          },
        })
      } catch (err) {
        const error = err as ValidationError
        console.log(error.message)
        setHasError(true)
      } finally {
        setHasLoaded(true)
      }
    }
    fetchClientData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (hasError) {
      throw new Error("Failed to load data!!")
    }
  }, [hasError])

  if (!hasLoaded) {
    return (
      <div
        data-testid="loading"
        className="w-screen h-screen flex flex-col justify-center items-center text-center text-3xl"
      >
        Please wait while we load your information.
      </div>
    )
  }

  return (
    <div id="app" className="App pt-5 pb-5">
      <div className="wrapper flex flex-row justify-center columns-2 overflow-hidden h-screen">
        <Dropdown data={sceneImageToDisplay} setImg={updateImgObj} />
        <SceneImage img={img} />
      </div>
    </div>
  )
}

export default function AppErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
