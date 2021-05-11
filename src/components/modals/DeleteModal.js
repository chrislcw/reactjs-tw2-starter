import React from "react"
import Popup from "reactjs-popup"
import { FormTitle, Button } from "../atoms"

const DeleteModal = (props) => {
  return (
    <Popup open={props.open} onClose={() => props.close()}>
      <div className="relative">
        <div className="p-4 lg:p-8">
          <FormTitle>Delete</FormTitle>
          <p className="mb-10">{props.message}</p>
          <div className="lg:flex lg:justify-end">
            <Button
              css="w-full lg:w-auto lg:ml-2 mb-2 lg:mb-0"
              variant="hollow"
              onClick={() => props.close()}
            >
              Cancel
            </Button>
            <Button
              css="w-full lg:w-auto lg:ml-2 mb-2 lg:mb-0"
              onClick={() => {
                props.deleteConfirmation()
              }}
            >
              Delete
            </Button>
          </div>
        </div>
        <div
          className="absolute -top-8 right-0 px-3 py-1 rounded-full bg-mmBlueDark text-white text-xs font-semibold cursor-pointer hover:opacity-50"
          onClick={() => props.close()}
        >
          Close
        </div>
      </div>
    </Popup>
  )
}

export default DeleteModal
