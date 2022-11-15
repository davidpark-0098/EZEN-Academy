import React, { useRef, useReducer, useMemo, useCallback } from "react";

const StarState = () => {
    const x = useRef();
    const y = useRef();
    const exec = useRef();

    const getResultValue = (state, action) => {
        console.log("%o %o", state, action);

        switch (action.exec) {
            case "+":
                return action.x + action.y;
            case "-":
                return action.x - action.y;
            case "/":
                return action.x / action.y;
            case "*":
                return action.x * action.y;
            default:
                return 0;
        }
    };

    const onButtonClick = useCallback(() => {
        setResultValue({
            x: Number(x.current.value),
            y: Number(y.current.value),
            exec: exec.current.options[exec.current.selectedIndex].value
        });
    }, []);

    const [resultValue, setResultValue] = useReducer(getResultValue, 0);

    const color = useMemo(() => {
        return resultValue % 2 === 0 ? "#f60" : "#06f";
    }, [resultValue]);

    return (
        <div>
            <h2>계산기</h2>
            <h3>useReducer, useMemo, useCallback을 활용한 사칙연산 계산기</h3>
            <hr />
            <input type="text" ref={x} />
            <select id="select" ref={exec}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">÷</option>
                <option value="*">×</option>
            </select>
            <input type="text" ref={y} />
            <button type="button" onClick={onButtonClick}>
                결과확인
            </button>
            <hr />
            <h3 style={{ color: color }}>결과값: {resultValue}</h3>
        </div>
    );
};

export default StarState;
