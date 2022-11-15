import React, { memo, useCallback, useEffect, useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

/** Slice */
import { getCurrentData, deleteItem, getItem } from "../slices/DepartmentSlice";

const DepartmentView = memo(() => {
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

  /** 데이터 가져오기 */
  useEffect(() => {
    dispatch(getCurrentData());
  }, []);

  /** data 값의 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(() => {
    if (data) {
      return data.find((v, i) => v.id == id);
    } else {
      dispatch(getItem({ id: id }));
    }
  }, [data]);

  /** 페이지 강제 이동을 처리하기 위한 navigate 함수 생성 */
  const navigate = useNavigate();

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
      ).then(({ meta, payload }) => {
        navigate("/");
      });
    }
  }, []);

  return (
    <div>
      <Spinner loading={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        item && (
          <div>
            <Table>
              <colgroup>
                <col width="120" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>학과번호</th>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <th>학과이름</th>
                  <td>{item.dname}</td>
                </tr>
                <tr>
                  <th>학과위치</th>
                  <td>{item.loc}</td>
                </tr>
              </tbody>
            </Table>

            <div style={{ textAlign: "center" }}>
              <NavLink to="/">목록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/department_add">등록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to={`/department_edit/${item.id}`}>수정</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="#!" data-id={item.id} data-dname={item.dname} onClick={onDepartmentItemDelete}>
                삭제
              </NavLink>
            </div>
          </div>
        )
      )}
    </div>
  );
});

export default DepartmentView;
