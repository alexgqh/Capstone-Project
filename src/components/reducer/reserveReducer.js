export const defaultState = {
  guests: 1, //1 to 30
  seating: 0, //0 or 1
  date: null, //today's date to 90 days in the future
  time: null, //5pm-9:45pm in increments of 15 minutes
  occasion: null, //"Birthday", "Engagement", "Anniversary"
}

//Constants
export const MINGUESTS = 1;
export const MAXGUESTS = 30;
export const MAXRESERVATIONTHRESH = 90; //Number of days out a reservation can be booked
export const NOW = new Date()
export const MINDATE = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate())
export const MAXDATE = new Date(MINDATE.getFullYear(), MINDATE.getMonth(), MINDATE.getDate() + MAXRESERVATIONTHRESH)

//Helper functions
const isValidDate = (date) => (date instanceof Date && !isNaN(date));
const isValidTime = (time) => {
  const acceptableTimes = ["5:00","5:15","5:30","5:45","6:00","6:15","6:30","6:45","7:00","7:15","7:30","7:45","8:00","8:15","8:30","8:45","9:00","9:15","9:30","9:45"];
  return (acceptableTimes.includes(time));
}
const clampInt = (i, min, max) => Math.min(max, Math.max(min, i));
const clampDate = (d, min = MINDATE, max = MAXDATE) => {
  //Keep hours, minutes, seconds, milliseconds etc at 0 for all dates
  const _d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const _min = new Date(min.getFullYear(), min.getMonth(), min.getDate());
  const _max = new Date(max.getFullYear(), max.getMonth(), max.getDate());

  //Perform compare logic
  if (_d < _min) return min;
  if (_d > _max) return max;
  return _d;
}

//Reducer function
export function reducer(state, action) {
  switch (action.type) {
    case "incGuests": return { ...state, guests: Math.min(state.guests + 1, MAXGUESTS) }
    case "decGuests": return { ...state, guests: Math.max(state.guests - 1, MINGUESTS) }
    case "setGuests": return { ...state, guests: clampInt(action.value, MINGUESTS, MAXGUESTS) }
    case "cycleSeating": return { ...state, seating: (state.seating === 0) ? 1 : 0 }
    case "setSeating": return { ...state, seating: clampInt(action.value, 0, 1) }
    case "setDate": return { ...state, date: isValidDate(action.value) ? clampDate(action.value) : new Date() }
    case "setTime": return { ...state, time: isValidTime(action.value) ? action.value : "5:00" }
    case "setOccasion": return { ...state, occasion: clampInt(action.value, 0, 2) }
  }
}