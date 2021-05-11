import React from "react";
import _ from "lodash";

const InputGroup = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className="text-mmGreyMid block mb-4">{props.label}</label>

      {props.type === "textarea" ? (
        <textarea
          className="block w-full px-4 py-5 border-mmGreyLite border-b-2 border-l border-r"
          ref={ref}
          {...props}
          placeholder={props.placeholder}
          rows={`${props.rows ? props.rows : 5}`}
        ></textarea>
      ) : (
        <input
          className="block w-full px-4 py-5 border-mmGreyLite border-b-2 border-l border-r"
          ref={ref}
          {...props}
          placeholder={props.placeholder}
        />
      )}

      {_.isString(props.error) && (
        <div className="form-error text-red-500 text-sm italic">
          {props.error}
        </div>
      )}
    </div>
  );
});

export default InputGroup;
