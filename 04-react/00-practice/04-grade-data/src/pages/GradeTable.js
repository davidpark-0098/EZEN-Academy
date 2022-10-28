import React from "react";
import { useParams } from "react-router-dom";

import GradeData from "../GradeData";
import GradeItem from "../component/GradeItem";
import Meta from "../component/Meta";

function DepartmentTable(props) {
    const params = useParams();
    const studentGrade = params.grade + "학년";

    return (
        <div>
            <Meta title={studentGrade + " ::: React 연습문제"} />

            <h3>{studentGrade}</h3>

            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {GradeData[studentGrade].map((v, i) => {
                        return <GradeItem key={i} 이름={v.이름} 성별={v.성별} 국어={v.국어} 영어={v.영어} 수학={v.수학} 과학={v.과학} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DepartmentTable;