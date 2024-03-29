import { useState, useEffect } from "react"
const Error = ( {children} ) => {
  return (
    <div>
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
            {children}
        </div>
    </div>
  )
}

export default Error
