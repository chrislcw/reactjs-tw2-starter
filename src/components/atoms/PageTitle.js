import React from "react";
import { Button } from "./../atoms";

const PageTitle = (props) => {
  return (
    <div>
      <div className="sm:flex items-center justify-between mb-10">
        <div className="ext-2xl md:text-7xl font-semibold uppercase">
          {props.children}
        </div>
        {!!props.buttonLabel && (
          <div className="pt-8 sm:pt-0">
            <Button variant="hollow" onClick={props.onClick}>
              {props.buttonLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
