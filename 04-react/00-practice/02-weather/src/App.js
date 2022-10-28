import React from 'react';
import {Link, Routes, Route} from "react-router-dom";

import WeatherPath from "./pages/WeatherPath"
import Error404 from "./pages/Error404"

function App() {
    return (
        <div>
            <h1>이번주 주간 날씨 예보</h1>
            <hr/>

            <nav>
                <Link to="/weather_path/mon">월</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/tue">화</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/wed">수</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/thu">목</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/fri">금</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/sat">토</Link>&nbsp;|&nbsp;
                <Link to="/weather_path/sun">일</Link>
            </nav>

            <Routes>
              <Route path='weather_path/:day' element={<WeatherPath/>} />
              <Route path='/*' element={<Error404/>} />
            </Routes>
        </div>
    );
}

export default App;