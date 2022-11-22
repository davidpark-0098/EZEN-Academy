import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/** 컨포넌트 */
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import LineChartView from "../components/LineChartView";
import MenuLink from "../components/MenuLink";

/** Meta */
import Meta from "../Meta";

/** 슬라이스 */
import { getList } from "../slices/Covid19Slice";

/** hook */
import { useQueryString } from "../hooks/useQueryString";

/** 메뉴 스타일 */
const NavContainer = styled.nav`
  a {
    color: #605a5a;

    ::after {
      content: " | ";
      color: #dbdbdb;
    }
  }
`;

const Covid19 = memo(() => {
  /** queryString 변수 받기 */
  const { gte, lte } = useQueryString();

  /** url의 경로와 변수값 구조분해 */
  const { search, pathname } = useLocation();

  /** 메뉴 변수 경로값 */
  const menu = pathname.slice(9);

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.Covid19Slice);

  /** 리덕스를 통해 기간 조회 */
  useEffect(() => {
    dispatch(
      getList({
        gte: gte,
        lte: lte
      })
    );
  }, [gte, lte]);

  return (
    <>
      <Meta title="Covid19 Status :: Chart" description="Chart Data" />

      <NavContainer>
        <MenuLink to={`/covid19/confirmed${search}`}>일일확진자</MenuLink>
        <MenuLink to={`/covid19/confirmed_acc${search}`}>누적확진자</MenuLink>
        <MenuLink to={`/covid19/active${search}`}>격리환자</MenuLink>
        <MenuLink to={`/covid19/released${search}`}>격리해제</MenuLink>
        <MenuLink to={`/covid19/released_acc${search}`}>누적격리해제</MenuLink>
        <MenuLink to={`/covid19/death${search}`}>사망자</MenuLink>
        <MenuLink to={`/covid19/death_acc${search}`}>누적사망자</MenuLink>
      </NavContainer>

      <Spinner loading={loading} />
      {Array.isArray(data) && data.length === 0 ? (
        <h1>해당 기간의 데이터가 없습니다.</h1>
      ) : error ? (
        <ErrorView error={error} />
      ) : (
        data && <LineChartView covid19={data} category={menu} />
      )}
    </>
  );
});

export default Covid19;
