import React from 'react'

const Tombol = (props) => {
  return (
    <button onClick={props.handleClick}>{props.children}</button>
  )
}

export default Tombol