import { useState, useEffect } from "react"
import InputBase from "./inputBase"

function getTimeFromIndex(index) {
  switch(index) {
    case 0: return "5:00";
    case 1: return "5:15";
    case 2: return "5:30";
    case 3: return "5:45";
    case 4: return "6:00";
    case 5: return "6:15";
    case 6: return "6:30";
    case 7: return "6:45";
    case 8: return "7:00";
    case 9: return "7:15";
    case 10: return "7:30";
    case 11: return "7:45";
    case 12: return "8:00";
    case 13: return "8:15";
    case 14: return "8:30";
    case 15: return "8:45";
    case 16: return "9:00";
    case 17: return "9:15";
    case 18: return "9:30";
    case 19: return "9:45";
  }
}

const TimeInput = ({ id, placeholder }) => {
  const [expanded, setExpanded] = useState(false);
  const [timeSelected, setTimeSelected] = useState(null);

  function renderTimeDropdownItems() {
    let idx = 0;
    let ret = []
    for (let i=1; i<=4; i++) {
      for (let j=1; j<=5; j++) {
        const thisValue = idx;
        const handleClick = (e) => {
          e.preventDefault();
          setTimeSelected(thisValue);
          alert('setting time to '+thisValue)
        }
        ret.push(
          <button
            className="input-item time-dropdown-item time-dropdown-item-active"
            key={"time-dropdown-item-"+i+j}
            onClick={handleClick}
          >
            {getTimeFromIndex(idx++)}
          </button>
        )
      }
    }
    return ret
  }

  const handleClick = (e) => {
    setExpanded(!expanded)
  }

  return (
    <InputBase id={id} caption="Time" onClick={handleClick} placeholder={timeSelected === null ? placeholder : ''} style={{position:"relative"}}>
      {timeSelected && <p className="input-font">{getTimeFromIndex(timeSelected)+" PM"}</p>}
      {expanded &&
      <div className="input-dropdown time-dropdown" role="combobox">
        {renderTimeDropdownItems()}
      </div>
      }
    </InputBase>
  )
}

export default TimeInput