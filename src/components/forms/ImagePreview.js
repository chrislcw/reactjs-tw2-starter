import React from "react"
// import { Trans } from "@lingui/macro";

const ImagePreview = (props) => {
  return (
    <div className={`relative ${props.dropzoneWidth}`}>
      <img src={props.src} alt="" className="xw-1/2 mx-auto" />
    </div>
  )
}

export default ImagePreview
