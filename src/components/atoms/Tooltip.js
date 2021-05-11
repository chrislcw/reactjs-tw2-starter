import React from "react"
import Popup from "reactjs-popup"

const Tooltip = React.forwardRef((props, ref) => {
  return (
    <Popup
      trigger={(open) => (
        <div className="popup-tooltip_question">
          <div className="w-6 h-6 bg-mmBlueDark rounded-full text-center">
            <span className="text-white italic leading-none font-serif">i</span>
          </div>
        </div>
      )}
      position={["top center", "bottom center"]}
      closeOnDocumentClick
      on="hover"
    >
      <div className="popup-body rounded-md overflow-hidden">
        <div className="p-4 font-normal">
          <div className="w-auto text-sm">{props.tip}</div>
        </div>
      </div>
    </Popup>
  )
})

export default Tooltip
