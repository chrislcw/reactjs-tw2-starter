import React from "react"
import Popup from "reactjs-popup"

const ImageModal = (props) => {
  return (
    <div className="image-popup">
      <Popup open={props.open} onClose={() => props.close()}>
        <div className="relative">
          <div className="p-4">
            <img src={props.imagePath} alt="" />
          </div>
          <div
            className="absolute -top-8 right-0 px-3 py-1 rounded-full bg-mmBlueDark text-white text-xs font-semibold cursor-pointer hover:opacity-50"
            onClick={() => props.close()}
          >
            Close
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default ImageModal
