import React from 'react'
import Image from 'next/image'

function IconWithTooltip({ src, alt, tooltip }) {
  return (
    <div className="relative group inline-block">
        <Image src={src} alt={alt} className="nav-icon" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-10 mb-2 w-max p-2 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <p>{tooltip}</p>
        </div>
    </div>
  )
}

export default IconWithTooltip