import React from "react";
import Select from "react-select";
import _ from "lodash";

const InputSelect = (props) => {
  const _handleChange = (option) => {
    if (_.isArray(option)) {
      let selectedOption = [];
      option.forEach((selected) => selectedOption.push(selected.value));

      // // console.log("A", props.name, selectedOption)

      props.onChange(props.name, selectedOption);
    } else if (option !== null) {
      // // console.log("B", props.name, option.value)

      props.onChange(props.name, option.value);
    } else if (option === null && props.isMulti) {
      // // console.log("C", props.name, [])

      props.onChange(props.name, []);
    } else {
      // // console.log("D", props.name, "")

      props.onChange(props.name, "");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div
      className={`${props.className ? props.className : "mb-5"} 
      ${!!props.labelOnLeft && "flex items-center justify-between"}
    `}
    >
      <label
        className={`text-mmGreyMid block ${
          !!props.labelOnLeft ? "mb-0 mr-4" : "mb-4"
        }`}
      >
        {props.label}
      </label>

      <div className={`w-full`}>
        <Select
          isDisabled={props.isDisabled}
          {...props}
          onChange={(option) => _handleChange(option)}
        />
      </div>

      {_.isString(props.error) && (
        <div className="form-error text-red-500 text-sm italic">
          {props.error}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
