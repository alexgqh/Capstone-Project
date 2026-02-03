import IconCalendar from '../assets/icon-calendar.svg';
import InputBase from './inputBase';
import CalendarDropdown from './calendarDropdown';
import Placeholder from './placeholder';
import { useState, useRef } from 'react';
import { useReserveState, useReserveDispatch } from './context/reserveContext';
import { NOW } from './reducer/reserveReducer';

const CalendarInput = ({ id, caption, placeholder, minDate, maxDate }) => {
  const [expanded, setExpanded] = useState(false);
  const dateSelected = useReserveState().date;
  const dispatch = useReserveDispatch();

  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (!dropdownRef.current) {
      if (!dateSelected) dispatch({ type: "setDate", value: NOW })
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
    <InputBase id={id} className="input-dropdown-parent" caption={caption} onClick={handleClick} style={style} role="textbox" aria-label="Choose Date">
      <span className="input-flex" role="button">
        {renderDateOrPlaceholder()}
        <img src={IconCalendar} alt="Calendar icon"/>
      </span>
      {expanded && <CalendarDropdown setExpanded={setExpanded} ref={dropdownRef} minDate={minDate} maxDate={maxDate} />}
    </InputBase>
  </>);
}

export default CalendarInput;