
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
    let date = new Date(year, month, 1);
    date.setDate(date.getDate() - date.getDay());
    const is4weeks = ((date.getDay() === 0) && (getDaysInMonth(year, month) === 28));
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