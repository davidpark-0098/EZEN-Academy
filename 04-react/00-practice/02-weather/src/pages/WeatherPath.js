import React from 'react';

import {useParams} from "react-router-dom";

const WeatherPath = () => {
    console.clear();

    const params = useParams();

    const weatherList = {
        "mon": [
            "맑음", "맑음"
        ],
        "tue": [
            "비", "맑음"
        ],
        "wed": [
            "맑음", "흐림"
        ],
        "thu": [
            "맑음", "흐림"
        ],
        "fri": [
            "흐림", "흐림"
        ],
        "sat": [
            "비", "맑음"
        ],
        "sun": ["맑음", "맑음"]
    };

    const today = params.day;

    let weatherToday = weatherList[today];

    if (!weatherToday) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    return (
        <div>
            <ul>
                <li><h2>오전</h2> {weatherToday[0]}</li>
                <li><h2>오후</h2> {weatherToday[1]}</li>
            </ul>
        </div>
    )
};

export default WeatherPath;