import React, { useState, useEffect, useCallback, memo } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #06f2;
  }
`;

const ProfessorList = memo(() => {
  const [professor, setProfessor] = useState([]);

  // 구조분해 loading1의 변수로 할당
  const [{ data, loading: loading1, error }, refetch] = useAxios("/professor", {
    // 캐시 데이터를 사용하여 같은 데이터를 화면에 반영하기 때문에, 캐시 데이터 사용을 하지 않는다.
    useCache: false
  });

  useEffect(() => {
    setProfessor(data);
  }, [data]);

  // ajax는 즉 여기서 data는 한번 호출하면 재사용 할 수 없다. 따라서, 다른곳에서 사용하려면 재호출 해야한다.
  const [{ loading: loading2 }, sendDelete] = useAxios(
    {
      method: "DELETE"
    },
    {
      useCache: false,
      manual: true
    }
  );

  const onDeleteClick = useCallback((e) => {
    e.preventDefault();

    const current = e.target;

    const id = parseInt(current.dataset.id);
    const name = current.dataset.name;

    if (window.confirm(`정말 ${name} 교수의 데이터를 삭제하시겠습니까?`)) {
      (async () => {
        let json = null;

        try {
          const response = await sendDelete({
            method: "DElETE",
            url: `professor/${id}`
          });

          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
        }

        if (json != null) {
          setProfessor((professor) => professor.filter((v, i) => v.id !== id));
        }
      })();
    }
  });

  return (
    <div>
      <Spinner visible={loading1 || loading2} />

      <LinkContainer>
        <TopLink to="add">교수 등록</TopLink>
      </LinkContainer>

      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th rowSpan="2">No.</th>
              <th rowSpan="2">이름</th>
              <th rowSpan="2">아이디</th>
              <th rowSpan="2">직급</th>
              <th rowSpan="2">급여</th>
              <th rowSpan="2">입사일</th>
              <th rowSpan="2">보직수당</th>
              <th rowSpan="2">소속학과번호</th>
              <th colSpan="2" rowSpan="2">
                수정/삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {professor &&
              professor.map(({ id, name, userid, position, sal, hiredate, comm, deptno }, i) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{userid}</td>
                    <td>{position}</td>
                    <td>{sal && `${sal}만원`}</td>
                    <td>{hiredate.slice(0, 10)}</td>
                    <td>{comm && `${comm}만원`}</td>
                    <td>{deptno}</td>
                    <td>
                      <NavLink to={`edit/${id}`}>수정</NavLink>
                    </td>
                    <td>
                      <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick}>
                        삭제
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default ProfessorList;
