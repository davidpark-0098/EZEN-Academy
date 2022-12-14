import React, { useCallback } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

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

const GradeEdit = () => {
  const { id } = useParams();

  // 페이지 강제 이동
  const navigate = useNavigate();

  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:3001/grade/${id}`);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;

      const name = current.name.value;
      const level = current.level.value;
      const sex = current.sex.value;
      const kor = current.kor.value;
      const eng = current.eng.value;
      const math = current.math.value;
      const sin = current.sin.value;

      let json = null;

      (async () => {
        try {
          const response = await refetch({
            method: 'PUT',
            data: {
              name: name,
              level: parseInt(level),
              sex: sex,
              kor: parseInt(kor),
              eng: parseInt(eng),
              math: parseInt(math),
              sin: parseInt(sin)
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

          // 상세 페이지가 존재한다면 아래와 같이 생성된 id값을 활용해야 한다.
          // navigate(`/read/${json.id}`);
          // or
          // navigate(`/read/?contentId=${json.id}`);
        }
      })();
    },
    [refetch, navigate]
  );

  return (
    <>
      <Spinner visible={loading} />
      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        data && (
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
                    <input className="field" type="text" name="name" defaultValue={data.name} />
                  </td>
                </tr>
                <tr>
                  <th>학년</th>
                  <td className="inputWrapper">
                    <select name="level" className="field" defaultValue={data.level}>
                      <option value="">---- 선택하세요 ----</option>
                      <option value="1">1학년</option>
                      <option value="2">2학년</option>
                      <option value="3">3학년</option>
                      <option value="4">4학년</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>성별</th>
                  <td className="inputWrapper">
                    <label>
                      <input type="radio" name="sex" value='남자' defaultChecked={data.sex === '남자'} />
                      남자
                    </label>
                    <label>
                      <input type="radio" name="sex" value='여자' defaultChecked={data.sex === '여자'} />
                      여자
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>국어</th>
                  <td className="inputWrapper">
                    <input type="number" className="field" name="kor" placeholder="숫자만 입력 (0~100)" defaultValue={data.kor} />
                  </td>
                </tr>
                <tr>
                  <th>영어</th>
                  <td className="inputWrapper">
                    <input type="number" className="field" name="eng" placeholder="숫자만 입력 (0~100)" defaultValue={data.eng} />
                  </td>
                </tr>
                <tr>
                  <th>수학</th>
                  <td className="inputWrapper">
                    <input type="number" className="field" name="math" placeholder="숫자만 입력 (0~100)" defaultValue={data.math} />
                  </td>
                </tr>
                <tr>
                  <th>과학</th>
                  <td className="inputWrapper">
                    <input type="number" className="field" name="sin" placeholder="숫자만 입력 (0~100)" defaultValue={data.sin} />
                  </td>
                </tr>
              </tbody>
            </TableEx>

            <div style={{ textAlign: "center" }}>
              <button type="submit">저장하기</button>
            </div>
          </form>
        )
      )}
    </>
  );
};

export default GradeEdit;
