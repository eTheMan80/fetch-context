import { ImageStateProps, SceneProps } from "./App.interface"

export type InitialState = {
  scene: SceneProps[]
  img: ImageStateProps
  imgIndex: number
}

export type ActionTypes =
  | { type: "updateScene"; payload: SceneProps[] }
  | { type: "updateImg"; payload: ImageStateProps }
  | { type: "updateImgIndex"; payload: number }

export const initialState: InitialState = {
  scene: [],
  img: {
    src: "",
    srcSet: "",
  },
  imgIndex: 0,
}

export const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "updateScene":
      return { ...state, scene: action.payload }
    case "updateImg":
      return { ...state, img: action.payload }
    case "updateImgIndex":
      return { ...state, imgIndex: action.payload }
    default:
      return state
  }
}
