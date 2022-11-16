import React, { memo, useCallback, useEffect, useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

/** Slice */
import { getCurrentData, deleteItem, getItem } from "../slices/StudentSlice";

const StudentView = memo(() => {
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.StudentSlice);

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
  const onStudentItemDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id, name } = current.dataset;

    if (window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
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
              <tbody style={{ textAlign: "start" }}>
                <tr>
                  <th>name</th>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>userid</th>
                  <td>{item.userid}</td>
                </tr>
                <tr>
                  <th>grade</th>
                  <td>{item.grade}학년</td>
                </tr>
                <tr>
                  <th>idnum</th>
                  <td>{item.idnum}</td>
                </tr>
                <tr>
                  <th>birthdate</th>
                  <td>{item.birthdate.slice(0, 10)}</td>
                </tr>
                <tr>
                  <th>tel</th>
                  <td>{item.tel}</td>
                </tr>
                <tr>
                  <th>height</th>
                  <td>{item.height}cm</td>
                </tr>
                <tr>
                  <th>weight</th>
                  <td>{item.weight}kg</td>
                </tr>
                <tr>
                  <th>deptno</th>
                  <td>{item.deptno}</td>
                </tr>
                <tr>
                  <th>profno</th>
                  <td>{item.profno}</td>
                </tr>
              </tbody>
            </Table>

            <div style={{ textAlign: "center" }}>
              <NavLink to="/">목록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/student_add">등록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to={`/student_edit/${item.id}`}>수정</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="#!" data-id={item.id} data-dname={item.name} onClick={onStudentItemDelete}>
                삭제
              </NavLink>
            </div>
          </div>
        )
      )}
    </div>
  );
});

export default StudentView;
