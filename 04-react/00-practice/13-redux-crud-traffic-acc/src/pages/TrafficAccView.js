import React, { memo, useCallback, useEffect, useMemo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** components */
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

/** Slice */
import { getCurrentData, deleteItem, getItem } from "../slices/TrafficAccSlice";

const TrafficAccView = memo(() => {
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.TrafficAccSlice);

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
  const onTrafficAccItemDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const { id, accident } = current.dataset;

    if (window.confirm(`정말 ${accident}(을)를 삭제하시겠습니까?`)) {
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
                  <th>year</th>
                  <td>{item.year}년</td>
                </tr>
                <tr>
                  <th>month</th>
                  <td>{item.month}월</td>
                </tr>
                <tr>
                  <th>accident</th>
                  <td>{item.accident}번</td>
                </tr>
                <tr>
                  <th>death</th>
                  <td>{item.death}명</td>
                </tr>
                <tr>
                  <th>injury</th>
                  <td>{item.injury}명</td>
                </tr>
              </tbody>
            </Table>

            <div style={{ textAlign: "center" }}>
              <NavLink to="/">목록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/traffic_acc_add">등록</NavLink>
              &nbsp;|&nbsp;
              <NavLink to={`/traffic_acc_edit/${item.id}`}>수정</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="#!" data-id={item.id} data-dname={item.accident} onClick={onTrafficAccItemDelete}>
                삭제
              </NavLink>
            </div>
          </div>
        )
      )}
    </div>
  );
});

export default TrafficAccView;
