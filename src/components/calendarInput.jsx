import IconCalendar from '../assets/icon-calendar.svg';
import InputBase from './inputBase';
import { useState, useRef } from 'react';

const CalendarInput = ({ id, caption, placeholder, bookingThresholdDays = 30 }) => {
  const [expanded, setExpanded] = useState(false);
  const [dateSelected, setDateSelected] = useState(null);

  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (!dropdownRef.current) {
      setExpanded(prev => !prev);
    } else {
      if (!dropdownRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
  }

  const dateOrPlaceholder = () => {
    if (dateSelected) {
      return <p className="input-font">{dateSelected}</p>
    } else {
      return <p className="input-font input-placeholder">{placeholder}</p>
    }
  }

  function renderDropdown() {
    return (
      <div className="input-calendar-dropdown" ref={dropdownRef}>
        &lt; January &gt;
      </div>
    );
  }

  return (
  <>
    {expanded && <div className="fullscreen-mask" />}
    <InputBase id={id} className="input-calendar-base" caption={caption} onClick={handleClick} onBlur={() => setExpanded(false)} style={expanded ? {zIndex: "1000"} : {}}>
      <span className="input-calendar">
        {dateOrPlaceholder()}
        <img src={IconCalendar} alt="Calendar icon"/>
      </span>
      {expanded && renderDropdown()}
    </InputBase>
  </>);
}

export default CalendarInput;