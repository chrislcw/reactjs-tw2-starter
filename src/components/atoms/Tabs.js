import React, { useState, useEffect } from "react"

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("")

  useEffect(() => {
    setActiveTab(props.options[0])
    // eslint-disable-next-line
  }, [])

  const _onTabChanged = (option) => {
    setActiveTab(option)
    props.onChange(option)
  }

  return (
    <div className="mb-8">
      <div className="flex justify-start">
        {props.options.map((option, index) => (
          <div
            key={index}
            className={`tab-toggle pb-1 mr-10 border-b-4 border-transparent cursor-pointer hover:opacity-50 ${
              option === activeTab && " border-mmBlueDark"
            }`}
            onClick={() => _onTabChanged(option)}
          >
            <span className="text-sm font-bold uppercase">{option}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
