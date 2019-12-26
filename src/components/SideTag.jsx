import React from 'react'

const SideTag = ({name, side, height, zIndex}) => {
  return (
    <div className="Side-tag d-none d-lg-block" id={side} style={{height: height, zIndex: zIndex}}>
      <h3>{name}</h3>
    </div>
  )
}

export default SideTag;