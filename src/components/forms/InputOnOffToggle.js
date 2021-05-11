import React, { useState } from "react"

const InputOnOffToggle = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(props.defaultValue)

  const _changeValue = (value) => {
    props.onChange(!value)
    setValue(!value)
  }

  return (
    <div className="cursor-pointer" onClick={() => _changeValue(value)}>
      <div
        className={`w-16 h-10 rounded-full flex items-center p-1 ${
          !!value ? "bg-statusGreen justify-end" : "bg-statusGrey justify-start"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-white"></div>
      </div>
    </div>
  )
})

export default InputOnOffToggle
