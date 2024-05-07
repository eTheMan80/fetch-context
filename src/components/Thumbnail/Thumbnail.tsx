import { SceneProps } from "../../App.interface"
import { useDispatchAppContext } from "../../context/use-context"

const Thumbnail = ({ data }: { data: SceneProps[] }): JSX.Element => {
  const { dispatch } = useDispatchAppContext()
  const dataIsNotEmpty = Array.isArray(data) && data.length > 0

  const handleClick = (index: number, imgUrl: string, imgSrcSet: string) => {
    dispatch({
      type: "updateImg",
      payload: {
        src: imgUrl,
        srcSet: imgSrcSet,
      },
    })
    dispatch({
      type: "updateImgIndex",
      payload: index,
    })
  }

  return (
    <div className="image-thumbnail bg-white px-3 py-3 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 rounded-lg flex flex-row justify-start z-1000">
      {dataIsNotEmpty &&
        data.map((img, index) => {
          return (
            <button
              data-testid={`btn-${img.sceneName}`}
              key={img.sceneName}
              onClick={() => {
                handleClick(
                  index,
                  img.nakedEyeImage.responsiveImage.src,
                  img.nakedEyeImage.responsiveImage.srcSet,
                )
              }}
            >
              <picture>
                <source
                  srcSet={img.nakedEyeImage.responsiveImage.srcSet}
                  type="image/jpg"
                />
                <img
                  data-testid={`image-thumbnail-${img.sceneName}`}
                  className="w-14 mr-2"
                  src={img.nakedEyeImage.responsiveImage.src}
                  alt=""
                />
              </picture>
            </button>
          )
        })}
    </div>
  )
}

export default Thumbnail
