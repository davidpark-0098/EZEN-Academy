import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import TableEx from "../components/TableEx";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

/** slice */
import { postItem } from "../slices/ProfessorSlice";

const ProfessorAdd = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.ProfessorSlice);

  /** form의 submit버튼이 눌러졌을 때, 호출될 이벤트 핸들러 */
  const onProfessorSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.currentTarget;

    // 유효성 검사
    // 생략...

    // 리덕스를 통한 데이터 저장 요청
    dispatch(
      postItem({
        name: current.name.value,
        userid: current.userid.value,
        position: current.position.value,
        sal: current.sal.value,
        hiredate: current.hiredate.value,
        comm: current.comm.value,
        deptno: current.deptno.value
      })
    ).then((result) => {
      console.log(result);

      navigate(`/professor_view/${result.payload.id}`);
    });
  }, []);

  return (
    <>
      <Spinner loading={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <form onSubmit={onProfessorSubmit}>
          <TableEx>
            <colgroup>
              <col width="120" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>name</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="name" />
                </td>
              </tr>
              <tr>
                <th>userid</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="userid" />
                </td>
              </tr>
              <tr>
                <th>position</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="position" />
                </td>
              </tr>
              <tr>
                <th>sal</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="sal" />
                </td>
              </tr>
              <tr>
                <th>hiredate</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="hiredate" />
                </td>
              </tr>
              <tr>
                <th>comm</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="comm" />
                </td>
              </tr>
              <tr>
                <th>deptno</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="deptno" />
                </td>
              </tr>
            </tbody>
          </TableEx>
          <div style={{ textAlign: "center" }}>
            <button type="submit">저장</button>
          </div>
        </form>
      )}
    </>
  );
});

export default ProfessorAdd;
