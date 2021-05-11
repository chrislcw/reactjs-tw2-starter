import React from "react"
import Select, { components } from "react-select"
import _ from "lodash"

const { Option, SingleValue } = components
const IconOption = (props) => (
  <Option {...props}>
    <div className="flex items-center">
      <div
        className="mr-5"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: `${props.data.color}`,
        }}
      ></div>
      <div className="px-0">{props.data.label}</div>
    </div>
  </Option>
)

const valueDisplay = (props) => (
  <SingleValue {...props}>
    <div className="flex items-center">
      <div
        className="mr-5"
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: `${props.data.color}`,
        }}
      ></div>
      <div className="px-0">{props.data.label}</div>
    </div>
  </SingleValue>
)

const InputSelectStatus = React.forwardRef((props, ref) => {
  return (
    <div className={`${props.className ? props.className : "mb-5"}`}>
      <label className="text-formLabel block mb-2">{props.label}</label>
      <Select
        isDisabled={props.isDisabled}
        options={props.options}
        components={{ Option: IconOption, SingleValue: valueDisplay }}
        {...props}
      />

      {_.isString(props.error) && (
        <div className="form-error text-red-500 text-sm italic">
          {props.error}
        </div>
      )}
    </div>
  )
})

export default InputSelectStatus
