import React, { memo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";

const Department = memo(() => {
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState([]);
  const [updateId, setUpdateId] = useState(-1);

  // url 값 가져오기
  // useLocation의 search 값은 현재 url의 변수 값을 가져온다. '?keyword=값'
  const { search } = useLocation();
  // URLSearchParams의 파라미터로 search(?keyword=값)을 넣으면 'keyword=값' 으로 출력된다.
  const query = new URLSearchParams(search);
  // Object.fromEntries의 파라미터로 query(keyword=값)을 넣으면 '값' 이 출력된다.
  const { keyword } = Object.fromEntries(query);

  const navigate = useNavigate();

  // 데이터 호출
  useEffect(() => {
    (async () => {
      setLoading(true);
      let json = null;

      try {
        const response = await axios.get("/department", {
          params: keyword ? { dname: keyword } : null
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading(false);
      }

      setDepartment(json);
    })();
  }, [keyword]);

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("submit~!!");

      navigate(`/department?keyword=${e.currentTarget.keyword.value}`);
    },
    [navigate]
  );

  // 추가
  const onDataAddSubmit = useCallback((e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const dname = form.dname.value;
    const loc = form.loc.value;

    /**
     * 유효성 검사 추가
     */

    (async () => {
      setLoading((loading) => true);
      let json = null;

      try {
        const response = await axios.post("/department", {
          dname: dname,
          loc: loc
        });
        json = response.data;

        console.group("데이터 저장 결과");
        console.log(json);
        console.groupEnd();
      } catch (e) {
        console.error(e);
        alert(`데이터 저장에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading((loading) => false);
      }
      setDepartment((department) => department.concat(json));

      form.reset();
    })();
  }, []);

  // 삭제
  const onDataDeleteClick = useCallback((e) => {
    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    console.log(`삭제 대상의 id값: ${id}`);

    (async () => {
      setLoading((loading) => true);

      try {
        await axios.delete(`/department/${id}`);
      } catch (e) {
        console.error(e);
        alert(`데이터 삭제에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading((loading) => false);
      }

      setDepartment((department) => {
        const dropId = department.findIndex((v, i) => {
          return v.id === id;
        });
        console.log(`제거할 대상의 배열 인덱스: ${dropId}`);
        department.splice(dropId, 1);

        return department;
      });
    })();
  }, []);

  // 수정
  const onDataEditClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    setUpdateId(id);
  }, []);

  // 수정 완료
  const onDataEditSubmit = useCallback((e) => {
    e.preventDefault();

    // 수정 양식의 input 값
    const current = e.target;

    const id = current.id.value;
    const dname = current.dname.value;
    const loc = current.loc.value;
    /**
     * 유효성 검사 추가
     */

    (async () => {
      setLoading(true);
      let json = null;

      try {
        const response = await axios.put(`/department/${id}`, {
          dname: dname,
          loc: loc
        });
        json = response.data;

        console.group("데이터 수정 결과");
        console.log(json);
        console.groupEnd();
      } catch (e) {
        console.error(e);
        alert(`데이터 수정에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading(false);
      }
      setDepartment((department) => {
        const editId = department.findIndex((v, i) => v.id === json.id);
        console.log(`제거할 대상의 배열 인덱스: ${editId}`);

        department.splice(editId, 1, json);

        return department;
      });
    })();

    setUpdateId(-1);
  }, []);

  // 화면 출력
  return (
    <div>
      <Spinner loading={loading} width={70} height={70} color={"#000000"} glassColor={"#ffffff"} />

      {/* 추가 양식 */}
      <form onSubmit={onDataAddSubmit}>
        <div>
          <label htmlFor="dname">학과 : </label>
          <input type="text" name="dname" id="dname" />
        </div>
        <div>
          <label htmlFor="loc">위치 : </label>
          <input type="text" name="loc" id="loc" />
        </div>
        <button type="submit">저장하기</button>
      </form>

      <hr />

      {/* 검색 양식 */}
      <form onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" />
        <button type="submit">검색</button>
      </form>

      {/* 수정 양식 */}
      <form onSubmit={onDataEditSubmit}>
        <table border="1">
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
            {!department.length ? (
              <tr>
                <td colSpan="5" align="center">
                  검색결과가 없습니다.
                </td>
              </tr>
            ) : (
              department.map((item, index) => {
                if (item.id === updateId) {
                  return (
                    <tr key={item.id}>
                      <input type="hidden" name="id" defaultValue={item.id} />
                      <td>{item.id}</td>
                      <td>
                        <input type="text" name="dname" defaultValue={item.dname} />
                      </td>
                      <td>
                        <input type="text" name="loc" defaultValue={item.loc} />
                      </td>
                      <td colSpan="2">
                        <button type="submit">수정완료</button>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.dname}</td>
                      <td>{item.loc}</td>
                      <td>
                        <button type="button" data-id={item.id} onClick={onDataEditClick}>
                          수정하기
                        </button>
                      </td>
                      <td>
                        <button type="button" data-id={item.id} onClick={onDataDeleteClick}>
                          삭제하기
                        </button>
                      </td>
                    </tr>
                  );
                }
              })
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
});

export default Department;
