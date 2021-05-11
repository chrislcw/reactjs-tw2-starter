import React from "react"
import iconEdit from "../../images/icon-edit.svg"

const IconButton = (props) => {
  return (
    <span
      className="underline cursor-pointer hover:opacity-50"
      onClick={props.onClick}
    >
      <img src={iconEdit} alt="" className="inline-block ml-2" />
    </span>
  )
}

export default IconButton
