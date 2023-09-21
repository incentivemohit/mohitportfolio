import React from 'react'

export default function ImageComponent({photo}) {
  return (
    <>
     <img src={`${photo}`} className="w-full h-full" alt="" />
    </>
  )
}
