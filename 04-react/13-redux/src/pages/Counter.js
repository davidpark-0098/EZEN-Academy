import React, { memo } from "react";
// 상태값 로드를 위한 hook, action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 함수 참조
import { plus, minus } from "../slices/CounterSlice";

const Counter = memo(() => {
  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { number, color } = useSelector((state) => state.CounterSlice);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={(e) => {
          dispatch(plus(5));
        }}
      >
        +5
      </button>
      <h2
        style={{
          color: color,
          margin: "10px",
          width: "50px",
          textAlign: "center"
        }}
      >
        {number}
      </h2>
      <button
        onClick={(e) => {
          dispatch(minus(3));
        }}
      >
        -3
      </button>
    </div>
  );
});

export default Counter;
