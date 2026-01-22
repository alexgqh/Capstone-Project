import IconCalendar from '../assets/icon-calendar.svg';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';
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

  const handleMonthLeft = (e) => { e.preventDefault(); }
  const handleMonthRight = (e) => { e.preventDefault(); }

  const dayLabels = ["S","M","T","W","Th","F","Sa"]

  function renderDropdown() {
    function renderDays() {
      let rows = [];
      //get month
      const currentDate = new Date();
      const currentMonth = currentDate.toLocaleString('default', { month: "long" });

      //get day of 1st of month

      //save days of row 1
      rows.push([30,31,1,2,3,4,5]);
      //save days of row 2
      rows.push([6,7,8,9,10,11,12]);
      //save days of row 3
      rows.push([13,14,15,16,17,18,19]);
      //save days of row 4
      rows.push([20,21,22,23,24,25,26]);
      //save days of row 5 (unless we're in a 28-day February where the 1st is on a Sunday)
      rows.push([27,28,29,30,31,1,2]);

      //render rows 1-5
      return rows.map(row => row.map(day => <span className="calendar-day">{day}</span>));
    }
    return (
      <div className="input-calendar-dropdown" ref={dropdownRef}>
        <div className="calendar-dropdown-title">
          <button onClick={handleMonthLeft}><img src={IconArrowLeft} alt="Left arrow"/></button>
          <h3 className="color-green">January</h3>
          <button onClick={handleMonthRight}><img src={IconArrowRight} alt="Right arrow"/></button>
        </div>
        <div className="calendar-dropdown-grid">
          {dayLabels.map(label => <span className="calendar-day-label">{label}</span>)}
          {renderDays()}
        </div>
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