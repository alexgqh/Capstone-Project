import { useState } from 'react';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';

const getDaysInMonth = (date) => {
  let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDayOfMonth.getDate();
}

const CalendarDropdown = ({ dateSelected, setDateSelected, ref }) => {
  let workingDate = dateSelected ? new Date(dateSelected) : new Date();
  const [viewingMonth, setViewingMonth] = useState(workingDate);
  const monthSelectedLong = viewingMonth.toLocaleString('default', { month: "long" });

  function getDaysOfYear() {
    let rows = [];
    let date = new Date(viewingMonth);
    date.setDate(1);
    const daysInMonth = getDaysInMonth(date);
    const is4weeks = ((date.getDay() === 0) && (daysInMonth === 28));
    date.setDate(date.getDate() - date.getDay());
    const totalWeeks = is4weeks ? 4 : 5;

    for (let week = 1; week <= totalWeeks; week++) {
      let row = [];

      for (let day = 1; day <= 7; day++) {
        const dayOfMonth = date.getDate();
        row.push(dayOfMonth);
        date.setDate(dayOfMonth + 1);
      }

      rows.push(row);
    }

    return rows;
  }

  const handleMonthLeft = (e) => {
    e.preventDefault();
    setViewingMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }
  const handleMonthRight = (e) => {
    e.preventDefault();
    setViewingMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  return (
    <div className="input-calendar-dropdown" ref={ref}>
      <div className="calendar-dropdown-title">
        <button onClick={handleMonthLeft} tabIndex={-1} className="calendar-month-arrow"><img src={IconArrowLeft} alt="Left arrow"/></button>
        <h3 className="calendar-month color-green">{monthSelectedLong}</h3>
        <button onClick={handleMonthRight} tabIndex={-1} className="calendar-month-arrow"><img src={IconArrowRight} alt="Right arrow"/></button>
      </div>
      <div className="calendar-dropdown-grid">
        {["S","M","T","W","Th","F","Sa"].map(label => <span className="calendar-day-label">{label}</span>)}
        {getDaysOfYear().map(row => row.map(day => <span className="calendar-day">{day}</span>))}
      </div>
    </div>
  );
}

export default CalendarDropdown;