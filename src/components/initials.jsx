import React from 'react'

const Initials = ({size, name, text}) => {

  const nameRow = name?.split(' ')
    const firstLetter = nameRow && !!nameRow.length && nameRow[0]?.charAt(0)
    const lastLetter = nameRow && nameRow.length > 1 && nameRow[1]?.charAt(0)
  return (
    <div className='circle flex gap-x-[1px] justify-center items-center fw-600 bg-[#291670]' style={{width:size, height:size}}>
        <p style={{ fontSize: `${text}px`}} className='uppercase'>{firstLetter}</p>
        <p style={{ fontSize: `${text}px`}}  className='uppercase'>{lastLetter && lastLetter}</p>
    </div>
  )
}

export default Initials