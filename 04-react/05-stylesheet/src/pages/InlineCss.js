import React from "react";

import sample from "../assets/img/sample.png";

const InlineCss = () => {
    const myStyle = {
        backgroundColor: "#f60",
        fontSize: "20px",
        color: "#0f6",
        fontWeight: "bold",
        padding: "10px 25px",
        marginBottom: "10px",
    };

    return (
        <div>
            <h2>InlineCss</h2>

            <h3>변수로 정의된 CSS 참조하기</h3>
            <div style={myStyle}>안녕 리액트 스타일 (1)</div>

            <h3>변수로 정의된 CSS 참조하기</h3>
            <div
                style={{
                    backgroundColor: "#f60",
                    fontSize: "20px",
                    color: "#0f6",
                    fontWeight: "bold",
                    padding: "10px 25px",
                    marginBottom: "10px",
                }}
            >
                안녕 리액트 스타일 (2)
            </div>

            <h3>이미지 참조하기</h3>
            <img src={sample} width="240" height="240" alt="샘플이미지" />

            <img src="/logo192.png" width="240" height="240" alt="react" />
        </div>
    );
};

export default InlineCss;
