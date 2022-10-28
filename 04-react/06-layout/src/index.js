/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               전역 스타일(GlobalStyles)과 전역 SEO 구성(Meta),
 *               라우팅 범위를 설정(BrowerRouter)하고 프로그램을 시작(App)한다.
 * @author: 박다윗(daxxx2030@gmail.com)
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import Meta from "./Meta";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Meta />
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);