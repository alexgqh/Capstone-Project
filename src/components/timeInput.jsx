import { useState } from "react"
import InputBase from "./inputBase"

const TimeInput = ({ id }) => {

  function renderDummyElements() {
    let ret = []
    for (let i=1; i<=4; i++) {
      for (let j=1; j<=5; j++) {
        ret.push(<div className="time-dropdown-item time-dropdown-item-active" key={"asdf-"+i+j}>{"5:00"}</div>)
      }
    }
    return ret
  }
  return (
    <InputBase id={id} caption="Time" style={{position:"relative"}}>
      <div className="time-dropdown" role="combobox">
        {renderDummyElements()}
      </div>
    </InputBase>
  )
}

export default TimeInput