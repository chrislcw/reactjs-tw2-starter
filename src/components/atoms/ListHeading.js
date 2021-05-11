import React from "react"
import asc from "../../images/icon-asc.svg"
import dsc from "../../images/icon-dsc.svg"

const ListHeading = (props) => {
  return (
    <div>
      <div className="text-mmBlueDark flex items-center">
        {props.order === undefined ? (
          <span> {props.children}</span>
        ) : (
          <span
            className="cursor-pointer hover:underline"
            onClick={() => {
              let order = ""
              switch (props.order) {
                case "":
                  order = "asc"
                  break
                case "asc":
                  order = "desc"
                  break
                default:
                  order = "asc"
              }
              props.sortColumn(order)
            }}
          >
            {props.children}
          </span>
        )}
        {props.order === "asc" && <img className="ml-2" src={asc} alt="" />}
        {props.order === "desc" && <img className="ml-2" src={dsc} alt="" />}
      </div>
    </div>
  )
}

export default ListHeading
