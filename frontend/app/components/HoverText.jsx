import React from 'react'

function HoverText({text}) {
  return (
    <div className="p-[5px] absolute bg-gray-500">
        <p>{text}</p>
    </div>
  )
}

export default HoverText