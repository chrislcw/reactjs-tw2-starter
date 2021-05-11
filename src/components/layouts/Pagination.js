import React from "react"
const Pagination = (props) => {
  const meta = props.meta

  return (
    <div>
      {meta.total > 1 && (
        <div className="flex justify-center items-center py-10">
          <div
            className={`-24 px-5 py-4 rounded-full bg-mmBlueDark text-white text-xs text-center font-semibold cursor-pointer hover:opacity-50 
      ${meta.current_page === 1 && "opacity-0 pointer-events-none"}`}
            onClick={() => props.goToPage(meta.current_page - 1)}
          >
            Previous
          </div>
          <div className="px-8">
            {meta.current_page} / {meta.last_page}
          </div>
          <div
            className={`-24 px-5 py-4 rounded-full bg-mmBlueDark text-white text-xs text-center font-semibold cursor-pointer hover:opacity-50 
      ${
        meta.current_page === meta.last_page && "opacity-0 pointer-events-none"
      }`}
            onClick={() => props.goToPage(meta.current_page + 1)}
          >
            Next
          </div>
        </div>
      )}
    </div>
  )
}

export default Pagination
