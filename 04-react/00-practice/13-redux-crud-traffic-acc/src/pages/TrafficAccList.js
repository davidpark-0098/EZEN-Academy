import React, { memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// components
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

// hooks
import { useQueryString } from "../hooks/useQueryString";

// slice
import { getList, deleteItem } from "../slices/TrafficAccSlice";

const ControlContainer = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;

  .controll {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }

  .chickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }

    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;

const Button = styled.button`
  margin-right: 10px;
`;

const TrafficAccList = memo(() => {
  /** queryString 변수 받기 */
  const { keyword } = useQueryString();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.TrafficAccSlice);

  /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(
      getList({
        keyword: keyword
      })
    );
  }, [keyword]);

  /** 페이지 강제 이동을 처리하기 위한 navigate 함수 생성 */
  const navigate = useNavigate();

  /** 검색 이벤트 */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;
      const keyword = current.keyword;

      let redirectUrl = keyword.value ? `/?keyword=${keyword.value}` : "/";
      navigate(redirectUrl);
    },
    [navigate]
  );

  /** 삭제 버튼에 대한 이벤트 리스너 */
  const onTrafficAccItemDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id, accident } = current.dataset;

    if (window.confirm(`정말 ${accident}(을)를 삭제하시겠습니까?`)) {
      dispatch(
        deleteItem({
          id: id
        })
      );
    }
  }, []);

  /** 수정 버튼에 대한 이벤트 리스너 */
  const onTrafficAccEditClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id } = current.dataset;

    navigate(`/traffic_acc_edit/${id}`);
  });

  return (
    <div>
      <Spinner loading={loading} />

      <ControlContainer onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" className="controll" />
        <button type="submit" className="controll clickable">
          검색
        </button>
        <NavLink to="traffic_acc_add" className="controll clickable">
          교통사고정보추가
        </NavLink>
      </ControlContainer>

      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>year</th>
                <th>month</th>
                <th>accident</th>
                <th>death</th>
                <th>injury</th>
                <th style={{ width: 150 + "px" }}>modify</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map(({ id, year, month, accident, death, injury }, i) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{year}년</td>
                      <td>{month}월</td>
                      <td>
                        <NavLink to={`/traffic_acc_view/${id}`}>{accident}번</NavLink>
                      </td>
                      <td>{death}명</td>
                      <td>{injury}명</td>
                      <td>
                        <Button className="button" type="button" data-id={id} onClick={onTrafficAccEditClick}>
                          수정
                        </Button>
                        <button className="button" type="button" data-id={id} data-accident={accident} onClick={onTrafficAccItemDelete}>
                          삭제
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" align="center">
                    검색 결과가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )
      )}
    </div>
  );
});

export default TrafficAccList;
