import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import TableEx from "../components/TableEx";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

/** slice */
import { postItem } from "../slices/TrafficAccSlice";

const TrafficAccAdd = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.TrafficAccSlice);

  /** form의 submit버튼이 눌러졌을 때, 호출될 이벤트 핸들러 */
  const onTrafficAccSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.currentTarget;

    // 유효성 검사
    // 생략...

    // 리덕스를 통한 데이터 저장 요청
    dispatch(
      postItem({
        year: current.year.value,
        month: current.month.value,
        accident: current.accident.value,
        death: current.death.value,
        injury: current.injury.value
      })
    ).then((result) => {
      console.log(result);

      navigate(`/traffic_acc_view/${result.payload.id}`);
    });
  }, []);

  return (
    <>
      <Spinner loading={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <form onSubmit={onTrafficAccSubmit}>
          <TableEx>
            <colgroup>
              <col width="120" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>year</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="year" />
                </td>
              </tr>
              <tr>
                <th>month</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="month" />
                </td>
              </tr>
              <tr>
                <th>accident</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="accident" />
                </td>
              </tr>
              <tr>
                <th>death</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="death" />
                </td>
              </tr>
              <tr>
                <th>injury</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="injury" />
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

export default TrafficAccAdd;
