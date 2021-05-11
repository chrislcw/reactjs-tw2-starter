import React from "react";

const FormTitle = (props) => {
  return (
    <div>
      <div className="text-3xl font-semibold uppercase mb-10">
        {props.children}
      </div>
    </div>
  );
};

export default FormTitle;
