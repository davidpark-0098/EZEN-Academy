import React from 'react';
import dayjs from 'dayjs';
import { useReducer } from 'react';


const setDateValue = (state, action) => {
  const day = dayjs();

  let date = null;

  switch (action) {
    case 'DAY7':
      date = day.add(-7, 'd').format('YYYY-MM-DD');
      break;
    case 'DAY15':
      date = day.add(-15, 'd').format('YYYY-MM-DD');
      break;
    case 'MONTH1':
      date = day.add(-1, 'M').format('YYYY-MM-DD');
      break;
    case 'MONTH3':
      date = day.add(-3, 'M').format('YYYY-MM-DD');
      break;
    case 'MONTH6':
      date = day.add(-6, 'M').format('YYYY-MM-DD');
      break;
    default:
      date = day.format('YYYY-MM-DD');
      break;
  }
  return {...state, startDate: date};
};
function DateRange2() {
  const day = dayjs();

  const [myDate, setMyDate] = useReducer(setDateValue, {
    startDate: day.format('YYYY-MM-DD'),
    endDate: day.format('YYYY-MM-DD'),
  });

  return (
    <div>
      <h2>DateRange2</h2>
      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>
      <p>
        <button type='button' onClick={e => setMyDate('DAY7')}>7일</button>
        <button type='button' onClick={e => setMyDate('DAY15')}>15일</button>
        <button type='button' onClick={e => setMyDate('MONTH1')}>1개월</button>
        <button type='button' onClick={e => setMyDate('MONTH3')}>3개월</button>
        <button type='button' onClick={e => setMyDate('MONTH6')}>6개월</button>
      </p>
    </div>
  )
}

export default DateRange2
