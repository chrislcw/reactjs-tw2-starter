import React from "react"

const DataRow = (props) => {
  return (
    <div className="bg-white flex flex-col lg:flex-row justify-between items-center lg:h-28 -mx-4 lg:mx-0 px-4 lg:px-5 py-3 mb-1 z-20 relative">
      {props.children}
    </div>
  )
}

export default DataRow
