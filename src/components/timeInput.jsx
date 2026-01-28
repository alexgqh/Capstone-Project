import { useState, useRef } from "react"
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
  const dropdownRef = useRef();

  function renderTimeDropdownItems() {
    let idx = 0;
    let ret = []
    for (let i=1; i<=4; i++) {
      for (let j=1; j<=5; j++) {
        const thisValue = idx;
        const handleClick = (e) => {
          e.preventDefault();
          setTimeSelected(thisValue);
          setExpanded(false);
        }
        const isSelected = (idx === timeSelected)
        let className = "input-item time-dropdown-item time-dropdown-item-active"
        if (isSelected) className += " time-dropdown-item-active-active"
        const time = getTimeFromIndex(idx++)
        ret.push(
          <button
            className={className}
            key={"time-dropdown-item-"+i+j}
            onClick={handleClick}
            title={time + " PM (CST)"}
          >
            {time}
          </button>
        )
      }
    }
    return ret
  }

  const handleClick = (e) => {
    if (expanded && dropdownRef.current?.contains(e.target)) return
    setExpanded(!expanded)
  }

  return (<>
    {expanded && <div className="fullscreen-mask" onClick={() => setExpanded(false)}/>}
    <InputBase id={id} className="input-dropdown-parent" caption="Time" onClick={handleClick} placeholder={timeSelected === null ? placeholder : ''} style={expanded ? {zIndex: "1000"} : {}}>
      {timeSelected !== null && <p className="input-font">{getTimeFromIndex(timeSelected)+" PM (CST)"}</p>}
      {expanded && <div className="input-dropdown time-dropdown" role="combobox" ref={dropdownRef}>
        {renderTimeDropdownItems()}
      </div>}
    </InputBase>
    </>)
}

export default TimeInput