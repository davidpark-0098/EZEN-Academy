import React, { useCallback, memo } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }

    label {
      margin-left: 7px;
      margin-right: 10px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

const ProfessorAdd = memo(() => {
  const navigate = useNavigate();

  const [{ loading }, refetch] = useAxios(
    {
      url: "professor",
      method: "POST"
    },
    { manual: true }
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;

      const name = current.name.value;
      const userid = current.userid.value;
      const position = current.position.value;
      const sal = current.sal.value;
      const hiredate = current.hiredate.value;
      const comm = current.comm.value;
      const deptno = current.deptno.value;

      let json = null;

      (async () => {
        try {
          const response = await refetch({
            data: {
              name: name,
              userid: userid,
              position: position,
              sal: parseInt(sal),
              hiredate: hiredate,
              comm: parseInt(comm),
              deptno: parseInt(deptno)
            }
          });

          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
        }

        if (json !== null) {
          window.alert("저장되었습니다.");
          navigate("/");
        }
      })();
    },
    [refetch, navigate]
  );

  return (
    <>
      <Spinner visible={loading} />

      <form onSubmit={onSubmit}>
        <TableEx>
          <colgroup>
            <col width="120" />
            <col />
          </colgroup>

          <tbody>
            <tr>
              <th>이름</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>아이디</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="userid" />
              </td>
            </tr>
            <tr>
              <th>직급</th>
              <td className="inputWrapper">
                <label>
                  <input type="radio" name="position" value="교수" />
                  교수
                </label>
                <label>
                  <input type="radio" name="position" value="부교수" />
                  부교수
                </label>
                <label>
                  <input type="radio" name="position" value="조교수" />
                  조교수
                </label>
                <label>
                  <input type="radio" name="position" value="전임강사" />
                  전임강사
                </label>
              </td>
            </tr>
            <tr>
              <th>급여</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="sal" placeholder="숫자 입력 (만원)" />
              </td>
            </tr>
            <tr>
              <th>입사일</th>
              <td className="inputWrapper">
                <input className="field" type="date" name="hiredate" />
              </td>
            </tr>
            <tr>
              <th>보직수당</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="comm" placeholder="숫자 입력 (만원)" />
              </td>
            </tr>
            <tr>
              <th>소속학과</th>
              <td className="inputWrapper">
                <select name="deptno" className="field">
                  <option value="">---- 선택하세요 ----</option>
                  <option value="101">컴퓨터공학과</option>
                  <option value="102">멀티미디어학과</option>
                  <option value="201">전자공학과</option>
                  <option value="202">기계공학과</option>
                </select>
              </td>
            </tr>
          </tbody>
        </TableEx>

        <div style={{ textAlign: "center" }}>
          <button type="submit">저장하기</button>
        </div>
      </form>
    </>
  );
});

export default ProfessorAdd;
