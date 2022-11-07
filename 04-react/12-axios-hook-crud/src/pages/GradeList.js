import React, { useState, useEffect, useCallback } from "react";
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

const GradeList = () => {
  const [grade, setGrade] = useState([]);

  // 구조분해 loading1의 변수로 할당
  const [{ data, loading: loading1, error }, refetch] = useAxios("grade", {
    // 캐시 데이터를 사용하여 같은 데이터를 화면에 반영하기 때문에, 캐시 데이터 사용을 하지 않는다.
    useCache: false
  });

  useEffect(() => {
    setGrade(data);
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

    if (window.confirm(`정말 ${name}학생의 성적을 삭제하시겠습니까?`)) {
      (async () => {
        let json = null;

        try {
          const response = await sendDelete({
            method: "DElETE",
            url: `grade/${id}`
          });

          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
        }

        if (json != null) {
          setGrade((grade) => grade.filter((v, i) => v.id !== id));
        }
      })();
    }
  });

  return (
    <div>
      <Spinner visible={loading1 || loading2} />

      <LinkContainer>
        <TopLink to="add">성적 추가하기</TopLink>
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
              <th rowSpan="2">학년</th>
              <th rowSpan="2">성별</th>
              <th colSpan="4">과목별 점수</th>
              <th colSpan="2">집계</th>
              <th colSpan="2" rowSpan="2">
                수정/삭제
              </th>
            </tr>
            <tr>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </tr>
          </thead>
          <tbody>
            {grade &&
              grade.map(({ id, name, level, sex, kor, eng, math, sin }, i) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{level}</td>
                    <td>{sex}</td>
                    <td>{kor}</td>
                    <td>{eng}</td>
                    <td>{math}</td>
                    <td>{sin}</td>
                    <td>{kor + eng + math + sin}</td>
                    <td>{(kor + eng + math + sin) / 4}</td>
                    <td>
                      <NavLink to={`edit/${id}`}>수정하기</NavLink>
                    </td>
                    <td>
                      <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick}>
                        삭제하기
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
};

export default GradeList;
