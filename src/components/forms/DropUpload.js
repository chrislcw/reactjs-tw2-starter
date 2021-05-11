import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react"
import Dropzone from "react-dropzone"

import iconClose from "../../images/icon-close.svg"

const DropUpload = forwardRef((props, ref) => {
  const [file, setFile] = useState([])

  const addFile = useCallback(
    (file) => {
      props.uploadAction("add", file)
      setFile(file)
    },
    [props]
  )

  useImperativeHandle(ref, () => ({
    resetFile() {
      props.uploadAction("remove")
      setFile([])
    },
  }))

  const removeFile = useCallback(() => {
    props.uploadAction("remove")
    setFile([])
  }, [props])

  return (
    <div className="mb-5">
      {file.length === 0 ? (
        <>
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
        </>
      ) : (
        <div className={`text-buttonBlue font-semibold ${props.fileNameClass}`}>
          {file.length > 0 && file[0].name}
          {" | "}
          <span
            className="hover:opacity-50 cursor-pointer"
            onClick={() => removeFile()}
          >
            Remove&nbsp;
            <img src={iconClose} className="inline-block" alt="" />
          </span>
        </div>
      )}
    </div>
  )
})

export default DropUpload
