import React from "react"

const TextButton = (props) => {
  return (
    <span
      className={`underline ${
        !!props.disabled ? "opacity-50" : "cursor-pointer hover:opacity-50"
      }`}
      onClick={
        !!props.disabled
          ? () => {
              return
            }
          : props.onClick
      }
    >
      {props.children}
    </span>
  )
}

export default TextButton
