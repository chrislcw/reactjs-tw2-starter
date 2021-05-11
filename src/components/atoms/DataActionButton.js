import React from "react"
import arrow from "../../images/arrow-data-action.svg"

const DataActionButton = (props) => {
  return (
    <div
      className="flex items-center cursor-pointer hover:opacity-50"
      onClick={props.onClick}
    >
      {props.children}
      <span>&nbsp;</span>
      <img src={arrow} alt="" />
    </div>
  )
}

export default DataActionButton
