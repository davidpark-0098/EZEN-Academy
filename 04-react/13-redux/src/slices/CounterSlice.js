import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  // 이 모듈이 관리하는 상태값 명시
  initialState: {
    number: 0,
    color: "#000"
  },

  // 상태값 갱신 함수 구현
  // 컴포넌트에서 이 함수를 호출할 때, 전달되는 파라미터는 action.payload로 전달된다.
  // initialState와 동일한 구조의 JSON을 리턴한다.
  reducers: {
    plus: (state, action) => {
      const numberValue = state.number + action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2f77eb";
      } else if (numberValue < 0) {
        colorValue = "#f60";
      }

      return { number: numberValue, color: colorValue };
    },
    minus: (state, action) => {
      const numberValue = state.number - action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2f77eb";
      } else if (numberValue < 0) {
        colorValue = "#f60";
      }

      return { number: numberValue, color: colorValue };
    }
  }
});

export const { plus, minus } = CounterSlice.actions;
export default CounterSlice.reducer;
