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
import { getList, deleteItem } from "../slices/DepartmentSlice";

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

const DepartmentList = memo(() => {
  /** queryString 변수 받기 */
  const { keyword } = useQueryString();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

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
  const onDepartmentItemDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id, dname } = current.dataset;

    if (window.confirm(`정말 ${dname}(을)를 삭제하시겠습니까?`)) {
      dispatch(
        deleteItem({
          id: id
        })
      );
    }
  }, []);

  /** 수정 버튼에 대한 이벤트 리스너 */
  const onDepartmentEditClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id } = current.dataset;

    navigate(`/department_edit/${id}`);
  });

  return (
    <div>
      <Spinner loading={loading} />

      <ControlContainer onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" className="controll" />
        <button type="submit" className="controll clickable">
          검색
        </button>
        <NavLink to="department_add" className="controll clickable">
          학과정보 추가
        </NavLink>
      </ControlContainer>

      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <Table>
            <thead>
              <tr>
                <th>학과번호</th>
                <th>학과명</th>
                <th>학과위치</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((v, i) => {
                  return (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>
                        <NavLink to={`/department_view/${v.id}`}>{v.dname}</NavLink>
                      </td>
                      <td>{v.loc}</td>
                      <td>
                        <button type="button" data-id={v.id} onClick={onDepartmentEditClick}>수정하기</button>
                      </td>
                      <td>
                        <button type="button" data-id={v.id} data-dname={v.dname} onClick={onDepartmentItemDelete}>
                          삭제하기
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

export default DepartmentList;
