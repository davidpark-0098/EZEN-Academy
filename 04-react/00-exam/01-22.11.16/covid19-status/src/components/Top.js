import React, { memo, useCallback } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

/** hook */
import { useQueryString } from "../hooks/useQueryString";

/** 스타일 */
const LineArticle = styled.hr`
  width: 100%;
  height: 2px;
  border: 0;
  background-color: #eee;
`;

const ControlContainer = styled.form`
  padding: 5px 0;
  display: flex;

  div {
    margin-right: 10px;
  }

  label {
    font-size: 12px;
    font-weight: 600;
    color: #605a5a;
    cursor: pointer;

    input {
      width: 150px;
      height: 30px;
      border-radius: 5px;
      border: 0;
      background-color: #f6f6f6;
      cursor: text;
    }
  }

  button {
    margin-left: 10px;
    background-color: #dbdbdb;
    border: 0;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    color: #605a5a;
    font-weight: 700;
    cursor: pointer;
  }
`;

const LinkBasic = styled(Link)`
  text-decoration: none;
  color: #605a5a;
`;

const Top = memo(() => {
  /** path의 gte와 lte 값을 구조분해 */
  const { gte, lte } = useQueryString();

  const onSelectChange = useCallback((e) => {
    e.preventDefault();
  });

  /** useNavigate */
  const navigate = useNavigate();

  /** 검색 후 해당 폼의 데이터 값을 useNavigate를 통하여 url를 강제 변경한다. */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;
      const gte = current.gte; // 시작일
      const lte = current.lte; // 종료일

      let redirectUrl = gte.value && lte.value ? `covid19/confirmed?gte=${gte.value}&lte=${lte.value}` : "/";
      navigate(redirectUrl); // url 변경
    },
    [navigate]
  );

  return (
    <>
      <h1>
        <LinkBasic to="/">Covid19 현황</LinkBasic>
      </h1>
      <LineArticle />
      <ControlContainer onSubmit={onSearchSubmit}>
        <div>
          <label>
            시작일
            <br />
            <input type="date" name="gte" defaultValue={gte} />
          </label>
        </div>
        <div>
          <label>
            종료일
            <br />
            <input type="date" name="lte" defaultValue={lte} />
          </label>
          <button type="submit" onChange={onSelectChange}>
            검색
          </button>
        </div>
      </ControlContainer>
      <LineArticle />
    </>
  );
});

export default Top;
