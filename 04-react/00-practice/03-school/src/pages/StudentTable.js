import React from "react";

import MySchoolData from "../MySchoolData";
import StudentItem from "../component/StudentItem";

function StudentTable() {
    return (
        <div>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>학생번호</th>
                        <th>학생이름</th>
                        <th>학년</th>
                        <th>아이디</th>
                        <th>주민번호</th>
                        <th>생년월일</th>
                        <th>연락처</th>
                        <th>키</th>
                        <th>몸무게</th>
                        <th>소속학과번호</th>
                        <th>당담교수번호</th>
                    </tr>
                </thead>
                <tbody>
                    {MySchoolData.student.map((v, i) => {
                        return (
                            <StudentItem
                                key={i}
                                id={v.id}
                                name={v.name}
                                userid={v.userid}
                                grade={v.grade}
                                idnum={v.idnum}
                                birthdate={v.birthdate}
                                tel={v.tel}
                                height={v.height}
                                weight={v.weight}
                                deptno={v.deptno}
                                profno={v.profno}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentTable;