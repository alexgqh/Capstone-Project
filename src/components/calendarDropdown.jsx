import { useState } from 'react';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';

function getDaysInMonth(date) {
  //getMonth + 1 goes to the next month, and passing 0 as the date goes to the previous day (1 would be 1st of month, 2 is 2nd, so 0 is day before 1st of month)
  let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDayOfMonth.getDate();
}

function datesMatch(date1, date2) {
  if (!date1 || !date2) return false;
  if (date1.getFullYear() !== date2.getFullYear()) return false;
  if (date1.getMonth() !== date2.getMonth()) return false;
  if (date1.getDate() !== date2.getDate()) return false;
  return true;
}

const CalendarDropdown = ({ dateSelected, setDateSelected, setExpanded, ref }) => {
  let workingDate = dateSelected ? new Date(dateSelected) : new Date();
  const [viewingMonth, setViewingMonth] = useState(workingDate);
  const monthSelectedLong = viewingMonth.toLocaleString('default', { month: "long", year: "2-digit" });

  function decMonth() {
    setViewingMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }
  function incMonth() {
    setViewingMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  function renderDays() {
    let date = new Date(viewingMonth);
    let days = [];

    //Go to the first of the month
    date.setDate(1);

    //Init number of weeks
    let totalWeeks = 5;
    {
      //Check if this is the rare case that we can display all days in 4 rows instead of five (Month is February, the 1st is on a Sunday, and it's not a leap year)
      if (date.getDay() === 0) {
        //The 1st of the month IS on a Sunday...

        //Check if there are 28 days in this month.
        if (getDaysInMonth(date) === 28) {
          totalWeeks = 4;
        }
      }

      //Check if this month takes 6 rows to display properly
      if (totalWeeks > 4) {
        if (date.getDay() === 5) {
          if (getDaysInMonth(date) === 31) {
            totalWeeks = 6;
          }
        } else if (date.getDay() === 6) {
          if (getDaysInMonth(date) >= 30) {
            totalWeeks = 6;
          }
        }
      }
    }

    //Start first row from Sunday, even if it was the previous month
    date.setDate(date.getDate() - date.getDay());

    //Remember if this is a previous month or next month
    let isPrev = true;
    let isNext = false;

    //Loop by row (1st row to 4th or 5th)
    for (let week = 1; week <= totalWeeks; week++) {

      //Loop by day of week -- Sunday through Saturday
      for (let day = 1; day <= 7; day++) {
        //Get day of month as a number (1-31)
        const dayOfMonth = date.getDate();

        //Update isPrev / isNext variables
        if (isPrev) {
          if (dayOfMonth === 1) isPrev = false;
        } else if (!isNext) {
          if (dayOfMonth === 1) isNext = true;
        }

        //Render button based on this information
        {
          //Init class
          let className = "calendar-day";
          if (isPrev || isNext) {
            className += " calendar-day-light";
            if (datesMatch(date, dateSelected)) {
              className += " calendar-day-light-active";
            }
          }
          else {
            className += " calendar-day-heavy";
            if (datesMatch(date, dateSelected)) {
              className += " calendar-day-heavy-active";
            }
          }

          //Init key
          let key = "calendar-day-";
          if (isPrev) key += "prev-"
          else if (isNext) key += "next-"
          key += dayOfMonth;

          //Init onClick
          const onClick = () => {
            setDateSelected(date);
            setExpanded(false);
          }

          days.push(<span className={className} key={key} onClick={onClick}>{dayOfMonth}</span>);
        }

        //Increment day and go to next iteration
        date.setDate(dayOfMonth + 1);
      }
    }

    return days;
  }

  const handleMonthLeft = (e) => {
    e.preventDefault();
    decMonth();
  }
  const handleMonthRight = (e) => {
    e.preventDefault();
    incMonth();
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
        {renderDays()}
      </div>
    </div>
  );
}

export default CalendarDropdown;