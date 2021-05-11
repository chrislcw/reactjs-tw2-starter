import React, { useState, useEffect, createRef } from "react";
import Popup from "reactjs-popup";
import DayPicker from "react-day-picker";
import moment from "moment";
import { _getNiceStringDate } from "../../utils/helper";
import "react-day-picker/lib/style.css";
import _ from "lodash";

const SingleDateDropdown = React.forwardRef((props, ref) => {
  const [datesLabel, setDatesLabel] = useState(props.placeholder);
  const [selectedDay, setSelectedDay] = useState(undefined);
  const popupRef = createRef();

  const dateChange = (day) => {
    // // console.log("dateChange", day)
    setSelectedDay(day);
    props.setFieldValue(moment(day).format("YYYY-MM-DD"));
    setDatesLabel(_getNiceStringDate(day));
  };

  useEffect(() => {
    popupRef.current.closePopup();
  }, [popupRef]);

  useEffect(() => {
    // // console.log("useEffect", props.value);

    if (props.value !== undefined) {
      setDatesLabel(props.value);
    }
  }, [props.value]);

  return (
    <div className="mb-5">
      {props.label && (
        <label className="text-mmGreyMid block mb-4">{props.label}</label>
      )}
      <div className="popup-datepicker">
        <Popup
          trigger={() => <div className="datepicker-toggle">{datesLabel}</div>}
          position={props.position || "bottom center"}
          closeOnDocumentClick
          ref={popupRef}
          // onClose={() => _onCloseDatesPicker()}
        >
          <DayPicker
            selectedDay={selectedDay}
            // modifiers={modifiers}
            onDayClick={(day) => dateChange(day)}
            disabledDays={props.disabledDays}
          />
        </Popup>
      </div>

      {_.isString(props.error) && (
        <div className="form-error text-red-500 text-sm italic">
          {props.error}
        </div>
      )}
    </div>
  );
});

export default SingleDateDropdown;
