import React, { useCallback, forwardRef } from "react"
import Dropzone from "react-dropzone"

const DropUploadMultiple = forwardRef((props, ref) => {
  const addFile = useCallback(
    (file) => {
      props.uploadAction("add", file)
    },
    [props]
  )

  return (
    <div className="mb-5">
      <Dropzone
        accept={props.accept}
        onDrop={(acceptedFiles) => addFile(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <div className="relative" {...getRootProps()}>
            <div className={`cursor-pointer ${props.dropzoneWidth}`}>
              <input {...getInputProps()} />
              <div className="px-5 py-10 leading-tight rounded bg-inputBG text-center">
                {props.label || (
                  <span>Click here / drop a file here to upload file</span>
                )}
              </div>
            </div>
          </div>
        )}
      </Dropzone>
      <div className="form-error text-red-500">{props.error}</div>
    </div>
  )
})

export default DropUploadMultiple
