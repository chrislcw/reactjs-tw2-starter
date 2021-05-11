import React from "react"
import arrow from "../../images/arrow-go-back.svg"

const BackButton = (props) => {
  return (
    <div
      className="flex items-center cursor-pointer hover:opacity-50 mb-8 lg:mb-0"
      onClick={() => props.history.goBack()}
    >
      <img src={arrow} alt="" />
      <span>&nbsp;</span>
      <span>Back</span>
    </div>
  )
}

export default BackButton
