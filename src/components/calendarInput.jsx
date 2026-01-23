import IconCalendar from '../assets/icon-calendar.svg';
import InputBase from './inputBase';
import CalendarDropdown from './calendarDropdown';
import { useState, useRef } from 'react';

const CalendarInput = ({ id, caption, placeholder, bookingThresholdDays = 30 }) => {
  const [expanded, setExpanded] = useState(false);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
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

  return (
  <>
    {expanded && <div className="fullscreen-mask" />}
    <InputBase id={id} className="input-calendar-base" caption={caption} onClick={handleClick} onBlur={() => setExpanded(false)} style={expanded ? {zIndex: "1000"} : {}}>
      <span className="input-calendar">
        {dateOrPlaceholder()}
        <img src={IconCalendar} alt="Calendar icon"/>
      </span>
      {expanded && <CalendarDropdown month={month} setMonth={setMonth} year={year} setYear={setYear} ref={dropdownRef}/>}
    </InputBase>
  </>);
}

export default CalendarInput;