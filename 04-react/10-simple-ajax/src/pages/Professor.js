import React, { memo, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import RegexHelper from "../helper/RegexHelper";
import Spinner from "../components/Spinner";

const Professor = memo(() => {
  const [loading, setLoading] = useState(false);
  const [professor, setProfessor] = useState([]);
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
        const response = await axios.get("/professor", {
          params: keyword ? { name: keyword } : null
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading(false);
      }

      setProfessor(json);
    })();
  }, [keyword]);

  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("submit~!!");

      navigate(`/professor?keyword=${e.currentTarget.keyword.value}`);
    },
    [navigate]
  );

  // 추가
  const onDataAddSubmit = useCallback((e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const userid = form.userid.value;
    const position = form.position.value;
    const sal = form.sal.value;
    const hiredate = form.hiredate.value;
    const comm = form.comm.value;
    const deptno = form.deptno.value;

    /**
     * 유효성 검사 추가
     */
    const regexHelper = RegexHelper.getInstance();

    try {
      regexHelper.value(form.name, "이름을 입력하세요.");
      regexHelper.value(form.userid, "아이디를 입력하세요.");
      regexHelper.value(form.position, "직급을 입력하세요.");
      regexHelper.value(form.sal, "급여를 입력하세요.");
      regexHelper.value(form.hiredate, "고용일을 입력하세요.");
      regexHelper.value(form.comm, "커미션을 입력하세요.");
      regexHelper.value(form.deptno, "학과번호를 입력하세요.");
    } catch (e) {
      alert(e.message);
      console.error(e);
      e.selector.focus();
      return;
    }
    alert("추가되었습니다.");

    (async () => {
      setLoading((loading) => true);
      let json = null;

      try {
        const response = await axios.post("/professor", {
          name: name,
          userid: userid,
          position: position,
          sal: sal,
          hiredate: hiredate,
          comm: comm,
          deptno: deptno
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
      setProfessor((department) => department.concat(json));

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
        await axios.delete(`/professor/${id}`);
      } catch (e) {
        console.error(e);
        alert(`데이터 삭제에 실패하였습니다.\n${e.message}`);
        return;
      } finally {
        setLoading((loading) => false);
      }

      setProfessor((professor) => {
        const dropId = professor.findIndex((v, i) => {
          return v.id === id;
        });
        console.log(`제거할 대상의 배열 인덱스: ${dropId}`);
        professor.splice(dropId, 1);

        return professor;
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
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    /**
     * 유효성 검사 추가
     */
    const regexHelper = RegexHelper.getInstance();

    try {
      regexHelper.value(current.name, "이름을 입력하세요.");
      regexHelper.value(current.userid, "아이디를 입력하세요.");
      regexHelper.value(current.position, "직급을 입력하세요.");
      regexHelper.value(current.sal, "급여를 입력하세요.");
      regexHelper.value(current.hiredate, "고용일을 입력하세요.");
      regexHelper.value(current.comm, "커미션을 입력하세요.");
      regexHelper.value(current.deptno, "학과번호를 입력하세요.");
    } catch (e) {
      alert(e.message);
      console.error(e);
      e.selector.focus();
      return;
    }
    alert("수정되었습니다.");

    (async () => {
      setLoading(true);
      let json = null;

      try {
        const response = await axios.put(`/professor/${id}`, {
          name: name,
          userid: userid,
          position: position,
          sal: sal,
          hiredate: hiredate,
          comm: comm,
          deptno: deptno
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
      setProfessor((professor) => {
        const editId = professor.findIndex((v, i) => v.id === json.id);
        console.log(`제거할 대상의 배열 인덱스: ${editId}`);

        professor.splice(editId, 1, json);

        return professor;
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
          <label htmlFor="name">교수이름 : </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="userid">아이디 : </label>
          <input type="text" name="userid" id="userid" />
        </div>
        <div>
          <label htmlFor="position">직급 : </label>
          <input type="text" name="position" id="position" />
        </div>
        <div>
          <label htmlFor="sal">급여 : </label>
          <input type="text" name="sal" id="sal" />
        </div>
        <div>
          <label htmlFor="hiredate">고용일 : </label>
          <input type="text" name="hiredate" id="hiredate" />
        </div>
        <div>
          <label htmlFor="comm">커미션 : </label>
          <input type="text" name="comm" id="comm" />
        </div>
        <div>
          <label htmlFor="deptno">학과번호 : </label>
          <input type="text" name="deptno" id="deptno" />
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
              <th>번호</th>
              <th>교수명</th>
              <th>아이디</th>
              <th>직급</th>
              <th>급여</th>
              <th>고용일</th>
              <th>커미션</th>
              <th>학과번호</th>
            </tr>
          </thead>
          <tbody>
            {!professor.length ? (
              <tr>
                <td colSpan="10" align="center">
                  검색결과가 없습니다.
                </td>
              </tr>
            ) : (
              professor.map((item, index) => {
                if (item.id === updateId) {
                  return (
                    <tr key={item.id}>
                      <input type="hidden" name="id" defaultValue={item.id} />
                      <td>{item.id}</td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="name" defaultValue={item.name} />
                      </td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="userid" defaultValue={item.userid} />
                      </td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="position" defaultValue={item.position} />
                      </td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="sal" defaultValue={item.sal} />
                      </td>
                      <td>
                        <input type="text" name="hiredate" defaultValue={item.hiredate} />
                      </td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="comm" defaultValue={item.comm} />
                      </td>
                      <td>
                        <input style={{ width: 60 + "px" }} type="text" name="deptno" defaultValue={item.deptno} />
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
                      <td>{item.name}</td>
                      <td>{item.userid}</td>
                      <td>{item.position}</td>
                      <td>{item.sal}</td>
                      <td>{item.hiredate}</td>
                      <td>{item.comm}</td>
                      <td>{item.deptno}</td>
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

export default Professor;
