import React from "react";

const Button = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className="underline"
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
