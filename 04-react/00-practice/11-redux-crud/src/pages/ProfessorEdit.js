import React, { memo, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// components
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import TableEx from "../components/TableEx";

// slice
import { getCurrentData, getItem, putItem } from "../slices/ProfessorSlice";

const ProfessorEdit = memo(() => {
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.ProfessorSlice);

  /** 데이터 가져오기 */
  useEffect(() => {
    dispatch(getCurrentData());
  }, []);

  /** data 값의 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(() => {
    if (data) {
      return data.find((v, i) => v.id == id);
    } else {
      // 새로 고침시 현재 데이터만 다시 로드한다.
      dispatch(getItem({ id: id }));
    }
  }, [data]);

  /** 페이지 강제 이동을 처리하기 위한 navigate 함수 생성 */
  const navigate = useNavigate();

  /** form의 submit 버튼이 눌러졌을 때, 호출될 이벤트 핸들러 */
  const onProfessorSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.currentTarget;

    // 입력값에 대한 유효성 검사
    // 생략...

    // 리덕스를 통한 데이터 저장 요청
    dispatch(
      putItem({
        id: current.id.value,
        name: current.name.value,
        userid: current.userid.value,
        position: current.position.value,
        sal: current.sal.value,
        hiredate: current.hiredate.value,
        comm: current.comm.value,
        deptno: current.deptno.value,
      })
    ).then((result) => {
      /** Slice의 `postItem.fulfilled`가 먼저 실행된 후 이 곳이 실행된다.
       * result.meta --> 백엔드에게 전송한 파라미터
       * result.payload --> 백엔드로부터 전송받은 응답결과
       */
      console.log(result);

      // 처리가 완료된 후 상세 페이지로 이동
      // 몇 번 데이터인지 path 파라미터로 전달한다. (querystring도 가능하다)
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
          <input type="hidden" name="id" defaultValue={item?.id} />
          <TableEx>
            <colgroup>
              <col width="120" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>name</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="name" defaultValue={item?.name} />
                </td>
              </tr>
              <tr>
                <th>userid</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="userid" defaultValue={item?.userid} />
                </td>
              </tr>
              <tr>
                <th>position</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="position" defaultValue={item?.position} />
                </td>
              </tr>
              <tr>
                <th>sal</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="sal" defaultValue={item?.sal} />
                </td>
              </tr>
              <tr>
                <th>hiredate</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="hiredate" defaultValue={item?.hiredate} />
                </td>
              </tr>
              <tr>
                <th>comm</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="comm" defaultValue={item?.comm} />
                </td>
              </tr>
              <tr>
                <th>deptno</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="deptno" defaultValue={item?.deptno} />
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

export default ProfessorEdit;
