import React, { useState, useEffect, useRef } from "react";

const StarState = () => {
    const console = useRef();

    const [rowNum, setRowNum] = useState(0);

    useEffect(() => {
        let s = "";
        for (let i = 0; i <= rowNum; i++) {
            for (let j = 0; j < i; j++) {
                s += `*`;
            }
            s += `<br/>`;
        }
        console.current.innerHTML = s;
    }, [rowNum]);

    return (
        <div>
            <h2>별찍기</h2>
            <h3>useState, useEffect, useRef를 사용한 별찍기</h3>
            <hr />
            <label htmlFor="row_num_input">rownum: </label>
            <input id="row_num_input" value={rowNum} type="number" onChange={(e) => setRowNum(e.currentTarget.value)} />
            <hr />
            <div ref={console}></div>
        </div>
    );
};

export default StarState;
