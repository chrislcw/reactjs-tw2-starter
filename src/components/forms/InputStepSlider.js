import React, { useState, useEffect } from "react";
import _ from "lodash";

const InputStepSlider = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(props.defaultValue);

  const totalOptions = props.options.length;

  useEffect(() => {
    setValue(props.value);
  }, [props]);

  const _changeValue = (value) => {
    setValue(value);
    props.onChange(value);
  };

  return (
    <div>
      {!!props.label && (
        <label className="text-mmGreyMid block mb-4">{props.label}</label>
      )}

      <div className="flex justify-between input-step-slider">
        {props.options.map((option, index) => (
          <div
            key={index}
            className={`input-step-slider_option xw-1/${totalOptions} ${
              value === option.value && "active"
            }`}
            onClick={() => _changeValue(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>

      {_.isString(props.error) && (
        <div className="form-error text-red-500 italic">{props.error}</div>
      )}
    </div>
  );
});

export default InputStepSlider;
