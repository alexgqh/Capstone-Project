import IconCalendar from '../assets/icon-calendar.svg';
import InputBase from './inputBase';
import CalendarDropdown from './calendarDropdown';
import Placeholder from './placeholder';
import { useState, useRef } from 'react';

const CalendarInput = ({ id, caption, placeholder, bookingThresholdDays = 90 }) => {
  const [expanded, setExpanded] = useState(false);
  const [dateSelected, setDateSelected] = useState();

  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (!dropdownRef.current) {
      if (!dateSelected) setDateSelected(new Date());
      setExpanded(prev => !prev);
    } else {
      if (!dropdownRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
  }

  const renderDateOrPlaceholder = () => {
    if (dateSelected) {
      const options = {
        //https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
        weekday: "short",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
      return <p className="input-font">{dateSelected.toLocaleDateString('en-US', options)}</p>
    } else {
      return <Placeholder>{placeholder}</Placeholder>
    }
  }

  let style = {}
  if (expanded) style.zIndex = "1000"

  return (<>
    {expanded && <div className="fullscreen-mask" onClick={() => setExpanded(false)}/>}
    <InputBase id={id} className="input-dropdown-parent" caption={caption} onClick={handleClick} style={style} role="textbox" ariaLabel="Choose Date">
      <span className="input-flex">
        {renderDateOrPlaceholder()}
        <img src={IconCalendar} alt="Calendar icon"/>
      </span>
      {expanded && <CalendarDropdown dateSelected={dateSelected} setDateSelected={setDateSelected} setExpanded={setExpanded} bookingThresholdDays={bookingThresholdDays} ref={dropdownRef}/>}
    </InputBase>
  </>);
}

export default CalendarInput;