import React from 'react'
import "./customButton.style.css"

const CustomButton = (props) => {
  return (
    <>
      <button onClick={props.onClickHandler}> {props.text} </button>
      <p>{}</p>
    </>
  )
}

export default CustomButton