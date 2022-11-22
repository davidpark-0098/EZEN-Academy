import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, NavLink, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";

/** 컨포넌트 */
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";
import MenuLink from "../components/MenuLink";

/** 슬라이스 */
import { getIdList, getList } from "../slices/Covid19Slice";

// hooks
import { useQueryString } from "../hooks/useQueryString";

const NavContainer = styled.nav`
  a {
    text-decoration: none;
    color: black;

    ::after {
      content: " | ";
      color: #dbdbdb;
    }
    :active {
      color: blue;
    }
  }
`;

const Covid19 = memo(() => {
  /** queryString 변수 받기 */
  const { gte, lte } = useQueryString();
  const { search } = useLocation();

  /** id 값 배열 저장 */
  const [id, setId] = useState();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.Covid19Slice);

  /** 목록 조회 */
  useEffect(() => {
    dispatch(
      getList({
        gte: gte,
        lte: lte,
        id: id
      })
    );
  }, [gte, lte, id]);

  const confirmed = useRef(1);
  const confirmed_acc = useRef();
  const active = useRef();
  const released = useRef();
  const released_acc = useRef();
  const death = useRef();
  const death_acc = useRef();

  const onMenuClick = useCallback((e) => {
    e.preventDefault();
    var myArray = [];
    if (data) {
      for (let i = data[0].id; i <= data[data.length - 1].id; i++) {
        myArray.push(i);
      }
    }

    console.log(myArray);
    setId(myArray);

    const current = e.currentTarget;

    // console.log(current);
    // console.log(confirmed);
  });

  return (
    <>
      <NavContainer>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={confirmed} value="confirmed">
          일일확진자
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={confirmed_acc}>
          누적확진자
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={active}>
          격리환자
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={released}>
          격리해제
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={released_acc}>
          누적격리해제
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={death}>
          사망자
        </NavLink>
        <NavLink to={`/covid19${search}`} onClick={onMenuClick} ref={death_acc}>
          누적사망자
        </NavLink>
      </NavContainer>

      <Spinner loading={loading} />
      {error ? <ErrorView error={error} /> : data && <LineChartView cData={data} />}
    </>
  );
});

export default Covid19;
