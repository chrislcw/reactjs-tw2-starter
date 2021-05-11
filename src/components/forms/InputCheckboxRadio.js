import React, { useState, useEffect } from "react";
import { _makeId } from "../../utils/helper";
import _ from "lodash";

const CheckboxGroup = (props) => {
  const randomId = _makeId(10);
  const [fieldValue, setFieldValue] = useState(props.value);
  const [disableOptions, setDisableOptions] = useState([]);

  useEffect(() => {
    // console.log("props.value", typeof props.value)

    setFieldValue(props.value);
  }, [props.value]);

  useEffect(() => {
    props.disableOptions !== undefined
      ? setDisableOptions(props.disableOptions)
      : setDisableOptions([]);
    // eslint-disable-next-line
  }, [props.disableOptions]);

  const _onChange = (v) => {
    if (props.type === "radio") {
      let temp = v;

      if (v === "true") {
        temp = true;
      }
      if (v === "false") {
        temp = false;
      }

      setFieldValue(temp);
      props.onChange(temp);
    } else {
      // Checkbox
      const idx = fieldValue.indexOf(v);
      let temp = [...fieldValue];

      if (idx > -1) {
        temp.splice(idx, 1);
      } else {
        temp.push(v);
      }
      setFieldValue(temp);
      props.onChange(temp);
    }
  };

  const _isChecked = (v) => {
    if (props.type === "radio") {
      if (v.toString() === fieldValue.toString()) {
        return true;
      }
    } else {
      // Checkbox
      if (fieldValue.indexOf(v) > -1) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  };

  return (
    <div className={`${props.groupInline && "inline-block mr-10"}`}>
      {props.label !== undefined && (
        <label className="text-mmGreyMid block mb-4">{props.label}</label>
      )}

      {props.options.map((option, index) => (
        <div
          key={index}
          className={`${props.inline && "inline-block pr-4 mb-2"} ${props.css}`}
        >
          <input
            type={props.type}
            name={props.name}
            value={option.value}
            id={randomId + index}
            onChange={(e) => {
              _onChange(e.target.value);
            }}
            checked={_isChecked(option.value)}
            disabled={disableOptions.indexOf(option.value) >= 0}
          />
          <label htmlFor={randomId + index}></label>
          <label htmlFor={randomId + index}>{option.label}</label>
        </div>
      ))}

      {_.isString(props.error) && (
        <div className="form-error text-red-500 text-sm italic">
          {props.error}
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
