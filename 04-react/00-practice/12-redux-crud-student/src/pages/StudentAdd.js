import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import TableEx from "../components/TableEx";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

/** slice */
import { postItem } from "../slices/StudentSlice";

const StudentAdd = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.StudentSlice);

  /** form의 submit버튼이 눌러졌을 때, 호출될 이벤트 핸들러 */
  const onStudentSubmit = useCallback((e) => {
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
        grade: current.grade.value,
        idnum: current.idnum.value,
        idnum: current.idnum.value,
        birthdate: current.birthdate.value,
        tel: current.tel.value,
        height: current.height.value,
        weight: current.weight.value,
        deptno: current.deptno.value,
        profno: current.profno.value
      })
    ).then((result) => {
      console.log(result);

      navigate(`/student_view/${result.payload.id}`);
    });
  }, []);

  return (
    <>
      <Spinner loading={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <form onSubmit={onStudentSubmit}>
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
                <th>grade</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="grade" />
                </td>
              </tr>
              <tr>
                <th>idnum</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="idnum" />
                </td>
              </tr>
              <tr>
                <th>birthdate</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="birthdate" />
                </td>
              </tr>
              <tr>
                <th>tel</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="tel" />
                </td>
              </tr>
              <tr>
                <th>height</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="height" />
                </td>
              </tr>
              <tr>
                <th>weight</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="weight" />
                </td>
              </tr>
              <tr>
                <th>deptno</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="deptno" />
                </td>
              </tr>
              <tr>
                <th>profno</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="profno" />
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

export default StudentAdd;
