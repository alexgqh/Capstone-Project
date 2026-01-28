import { useState } from 'react';
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';
import IconArrowLeftDisabled from '../assets/icon-arrow-left-disabled.svg';
import IconArrowRightDisabled from '../assets/icon-arrow-right-disabled.svg';

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

function isDateWithinRange(date, start, end) {
  start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return (date >= start && date <= end);
}

const CalendarDropdown = ({ dateSelected, setDateSelected, setExpanded, bookingThresholdDays, ref }) => {
  const todaysDate = new Date();
  const endDate = new Date(todaysDate);
  endDate.setDate(endDate.getDate() + bookingThresholdDays);
  const [viewingMonth, setViewingMonth] = useState(new Date(dateSelected ? dateSelected : todaysDate));

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
      else if (date.getDay() === 5) {
        //First of month is a Friday
        if (getDaysInMonth(date) === 31) {
          totalWeeks = 6;
        }
      }
      else if (date.getDay() === 6) {
        //First of month is a Saturday
        if (getDaysInMonth(date) >= 30) {
          totalWeeks = 6;
        }
      }
    }

    //Start first row from Sunday, even if it was the previous month
    date.setDate(date.getDate() - date.getDay());

    //Loop by row (1st row to 4th, 5th or 6th)
    for (let week = 1; week <= totalWeeks; week++) {

      //Loop by day of week -- Sunday through Saturday
      for (let day = 1; day <= 7; day++) {
        //Get day of month as a number (1-31)
        const dayOfMonth = date.getDate();

        //Is this day from the previous or next month, or is it a part of the focused month?
        const isViewedMonth = (date.getMonth() === viewingMonth.getMonth());

        //Render button based on this information
        {
          const thisDate = new Date(date);
          const isEnabled = isDateWithinRange(thisDate, todaysDate, endDate);
          const isToday = datesMatch(date, todaysDate);
          const isSelected = datesMatch(date, dateSelected);
          let style = {};
          let title = "";
          let handleClick;

          //Init class and style
          let className = "calendar-day";
          if (isEnabled) {
            //This is a clickable day (within the acceptable date range)
            title = date.toLocaleDateString('en-US', { weekday: "short", month: "long", day: "numeric", year: "numeric"})
            if (isViewedMonth) {
              className += " calendar-day-heavy"
              if (isSelected) {
                className += " calendar-day-heavy-active"
              }
            } else {
              className += " calendar-day-light"
              if (isSelected) {
                className += " calendar-day-light-active"
              }
            }

            if (isToday) {
              className += " underline"
              title += " (today)"
            }

            handleClick = (e) => {
              e.preventDefault();
              setDateSelected(thisDate);
              setExpanded(false);
            }
          } else {
            //This is not a clickable day (prior to today or after reservation days threshold)
            className += " disable-pointer"
            if (isViewedMonth) {
              style.backgroundColor = "var(--color-bg)"
            } else {
              style.border = "3px solid var(--color-bg)"
            }

            handleClick = (e) => {
              e.preventDefault();
            }
          }

          //Init key
          let key = "calendar-day-";
          if (!isViewedMonth) key += "peeking-"
          key += dayOfMonth;

          days.push(<button className={className} key={key} onClick={handleClick} title={title} style={style}>{dayOfMonth}</button>);
        }

        //Increment day and go to next iteration
        date.setDate(dayOfMonth + 1);
      }
    }

    return days;
  }

  const isCurrentMonth = todaysDate.getMonth() === viewingMonth.getMonth();
  const monthSelectedLong = viewingMonth.toLocaleString('default', { month: "long", year: "numeric" });

  function renderArrow(isLeft) {
    const enabled = isLeft ? (!isCurrentMonth) : (viewingMonth.getMonth() !== endDate.getMonth());
    const className = `calendar-month-arrow${enabled ? "" : " disable-pointer"}`;
    const src = isLeft ? (enabled ? IconArrowLeft : IconArrowLeftDisabled) : (enabled ? IconArrowRight : IconArrowRightDisabled);
    const alt = isLeft ? "Left arrow" : "Right arrow";
    const handleClick = (e) => {
      e.preventDefault();
      if (enabled) {
        if (isLeft) decMonth();
        else incMonth();
      }
    }

    return (
      <button className={className} onClick={handleClick} tabIndex={-1}><img src={src} alt={alt}/></button>
    );
  }

  return (
    <div className="input-dropdown input-calendar-dropdown" ref={ref}>
      <div className={`calendar-dropdown-title`}>
        {renderArrow(true)}
        <h3 className={`calendar-month color-green ${isCurrentMonth ? "underline" : ""}`}>{monthSelectedLong}</h3>
        {renderArrow(false)}
      </div>
      <div className="calendar-dropdown-grid">
        {["S","M","T","W","Th","F","Sa"].map(label => <span className="calendar-day-label">{label}</span>)}
        {renderDays()}
      </div>
    </div>
  );
}

export default CalendarDropdown;