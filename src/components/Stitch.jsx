import React from 'react'

const Stitch = ({ name }) => {

  const spamTheSpan = (obj) => {
    console.log(obj)
    let block = obj;
    for (let i=0; i<100; i++) {
      block += ' ' + obj
    }
    return block;
  }

  return (
    <div className="Stitch">
      <div className="Stitch-text-wrapper">
        <span>{spamTheSpan(name)}</span>
      </div>
    </div>
  )
}

export default Stitch;