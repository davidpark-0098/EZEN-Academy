import React, { useState, useCallback, memo, useEffect } from "react";
import styled from "styled-components";
import useAxios from "axios-hooks";

import useMountedRef from "../hooks/useMountedRef";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

const SelectContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;

  select {
    margin-right: 15px;
    font-size: 16px;
    padding: 5px 10px;
  }
`;

const URL = "http://localhost:3001/traffic_acc";

const Titanic = memo(() => {
  const [{ data, loading, error }, refetch] = useAxios(URL);

  const [state, setState] = useState({
    year: ""
  });

  const mountedRef = useMountedRef();

  // 드롭박스 년도 추가
  let chooseYear = [];
  // 2005 ~ 2015 년도
  for (let i = 2005; i <= 2015; i++) {
    chooseYear.push(i);
  }

  useEffect(() => {
    if (mountedRef.current) {
      const params = {};
      for (const key in state) {
        if (state[key]) {
          params[key] = state[key];
        }
      }
      refetch({
        params: params
      });
    }
  }, [mountedRef, refetch, state]);

  const onSelectChange = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;
      const key = current.name;
      const value = current[current.selectedIndex].value;
      console.log(value);

      // 기존의 상태값을 그대로 복사한 상태에서 드롭다운의 name속성과 일치하는 key에 대한 value를 수정
      const newState = { ...state, [key]: value };

      setState(newState);

      console.log(newState);
    },
    [state]
  );

  // 콜백 스타일의 경우 현재 상태값이 복사된 파라미터가 콜백으로 전달된다.
  // setState(newState => {
  //   newState[key] = value;

  //   console.log(newState);

  //   return newState;
  // });
  // }, []);

  if (error) {
    console.error(error);

    return (
      <div>
        <h1>Oops! {error.code} Error.</h1>
        <hr />
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <Spinner loading={loading} />

      <SelectContainer>
        <select name="year" onChange={onSelectChange}>
          <option value="">전체</option>
          {chooseYear.map((v, i) => {
            return (
              <option value={v} key={i}>
                {v}년도
              </option>
            );
          })}
        </select>
      </SelectContainer>

      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>년도</th>
            <th>월</th>
            <th>교통사고 건수</th>
            <th>사망자 수</th>
            <th>부상자 수</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ id, year, month, accident, death, injury }, i) => {
            return (
              <tr key={id}>
                <td style={{ width: 100 + "px" }}>{id}</td>
                <td>{year}년</td>
                <td>{month}월</td>
                <td>{accident.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}건</td>
                <td>{death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</td>
                <td>{injury.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</td>
              </tr>
            );
          })}
          <tr style={{ backgroundColor: "#f0f6f9", color: "#168" }}>
            <td colSpan="3">합계</td>
            <td>
              {data
                ?.reduce((arr, cur) => arr + cur.accident, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              건
            </td>
            <td>
              {data
                ?.reduce((arr, cur) => arr + cur.death, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              건
            </td>
            <td>
              {data
                ?.reduce((arr, cur) => arr + cur.injury, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              건
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
});

export default Titanic;
