import { useState } from 'react';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';

const getDaysInMonth = (date) => {
  //getMonth + 1 goes to the next month, and passing 0 as the date goes to the previous day (1 would be 1st of month, 2 is 2nd, so 0 is day before 1st of month)
  let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDayOfMonth.getDate();
}

const CalendarDropdown = ({ dateSelected, setDateSelected, setExpanded, ref }) => {
  let workingDate = dateSelected ? new Date(dateSelected) : new Date();
  const [viewingMonth, setViewingMonth] = useState(workingDate);
  const monthSelectedLong = viewingMonth.toLocaleString('default', { month: "long" });

  function renderDays() {
    let rows = [];
    let date = new Date(viewingMonth);

    //Go to the first of the month
    date.setDate(1);

    //Check if this is the rare case that we can display all days in 4 rows instead of five (Month is February, the 1st is on a Sunday, and it's not a leap year)
    let is4weeks = false;
    if (date.getDay() === 0) {
      //The 1st of the month IS on a Sunday...

      //Check if there are 28 days in this month.
      if (getDaysInMonth(date) === 28) {
        is4weeks = true;
      }
    }

    //Start first row from Sunday, even if it was the previous month
    date.setDate(date.getDate() - date.getDay());

    //Loop by row (1st row to 4th or 5th)
    const totalWeeks = is4weeks ? 4 : 5;
    for (let week = 1; week <= totalWeeks; week++) {
      let row = [];

      //Loop by day of week -- Sunday through Saturday
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
        {renderDays().map(row => row.map(day => <span className="calendar-day">{day}</span>))}
      </div>
    </div>
  );
}

export default CalendarDropdown;