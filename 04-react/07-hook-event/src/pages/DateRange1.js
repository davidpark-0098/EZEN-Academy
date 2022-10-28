import React, { useState } from 'react';
import dayjs from "dayjs";

const DateRange1 = () => {
    const day = dayjs();

    const [myDate, setMyDate] = useState({
        startDate: day.format("YYYY-MM-DD"),
        endDate: day.format("YYYY-MM-DD")
    });

    return (
        <div>
            <h2>DateRange1</h2>

            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>
            <button
              type="button"
              onClick={e => {
                setMyDate({ ...myDate, startDate: day.add(-7, 'd').format('YYYY-MM-DD') });
              }}>
                7일
            </button>

            <button
              type="button"
              onClick={e => {
                setMyDate({ ...myDate, startDate: day.add(-15, 'd').format('YYYY-MM-DD') });
              }}>
                15일
            </button>

            <button
              type="button"
              onClick={e => {
                setMyDate({ ...myDate, startDate: day.add(-1, 'M').format('YYYY-MM-DD') });
              }}>
                1개월
            </button>

            <button
              type="button"
              onClick={e => {
                setMyDate({ ...myDate, startDate: day.add(-3, 'M').format('YYYY-MM-DD') });
              }}>
                3개월
            </button>

            <button
              type="button"
              onClick={e => {
                setMyDate({ ...myDate, startDate: day.add(-6, 'M').format('YYYY-MM-DD') });
              }}>
                6개월
            </button>
        </div>
    );
};

export default DateRange1;
