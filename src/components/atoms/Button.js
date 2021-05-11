////////////////////////////////////////////////////////////////////
// props
// css = "css classes..."
// variant = hollow || grey
// disableMinWidth
////////////////////////////////////////////////////////////////////

import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={`uppercase border font-semibold text-sm rounded-full hover:opacity-50 px-10 py-5 w-full sm:w-auto flex-shrink
      ${!props.variant && "bg-mmBlack border-mmBlack text-white"}
      ${
        props.variant === "hollow" &&
        "bg-transparent border-mmBlack text-mmBlack"
      } 
      ${
        props.variant === "hollow-invert" &&
        "bg-transparent border-mmWhite text-mmWhite"
      } 
      ${
        props.variant === "grey" &&
        "bg-mmGreyMidDarker border-mmGreyMidDarker text-white"
      } 
      ${!props.disableMinWidth && "min-w-200px"} 
      ${!!props.css && props.css}`}
      type={props.type ? props.type : "button"}
      onClick={
        props.disabled
          ? () => {
              return;
            }
          : props.onClick
      }
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </button>
  );
});

export default Button;
