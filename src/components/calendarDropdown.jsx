
import IconArrowLeft from '../assets/icon-arrow-left.svg';
import IconArrowRight from '../assets/icon-arrow-right.svg';

const getDaysInMonth = (year, month) => {
  let nextMonth = new Date(year, month + 1, 0);
  return nextMonth.getDate()
}

const CalendarDropdown = ({ date, setDate, month, setMonth, year, setYear, ref }) => {
  if (!month || !year) {
    const currentDate = new Date();
    if (!month) month = currentDate.getMonth();
    if (!year) year = currentDate.getFullYear();
  }

  const currentDate = new Date(year, month, 1);
  const thisMonth = currentDate.toLocaleString('default', { month: "long" });

  function getDaysOfYear() {
    let rows = [];

    //get month
    const currentDate = new Date(year, month);

    //get date: 1st of month
    const firstOfMonth = new Date(year, month, 1);

    alert(getDaysInMonth(year, month));

    //save days
    {
      let date = null;
      const firstOfMonthDOW = firstOfMonth.getDay(); //The day of the week (0=Sun)
      const daysInMonth = getDaysInMonth(year, month);
      let skipRow5 = false;
      for (let i = 1; i++; i <= 5) {
        if (skipRow5 && i === 5) break

        let row = []
        for (let j = 0; j++; j < 7) {
          if (date === null) {
            if (firstOfMonthDOW === j) {
              date = j + 1
            }
            row.push(date)
          } else {
            if (date > daysInMonth) {
              row.push(null)
            } else {
              row.push(date++)
            }
          }
        }
        rows.push(row);
      }
    }

    return rows;
  }

  const handleMonthLeft = (e) => { e.preventDefault(); }
  const handleMonthRight = (e) => { e.preventDefault(); }

  return (
    <div className="input-calendar-dropdown" ref={ref}>
      <div className="calendar-dropdown-title">
        <button onClick={handleMonthLeft}><img src={IconArrowLeft} alt="Left arrow"/></button>
        <h3 className="color-green">January</h3>
        <button onClick={handleMonthRight}><img src={IconArrowRight} alt="Right arrow"/></button>
      </div>
      <div className="calendar-dropdown-grid">
        {["S","M","T","W","Th","F","Sa"].map(label => <span className="calendar-day-label">{label}</span>)}
        {getDaysOfYear().map(row => row.map(day => <span className="calendar-day">{day}</span>))}
      </div>
    </div>
  );
}

export default CalendarDropdown;