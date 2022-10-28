import React from "react";

import MySchoolData from "../MySchoolData";
import ProfessorItem from "../component/ProfessorItem";

function ProfessorTable() {
    return (
        <div>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>교수번호</th>
                        <th>교수이름</th>
                        <th>아이디</th>
                        <th>직급</th>
                        <th>급여</th>
                        <th>입사일</th>
                        <th>보직수당</th>
                        <th>소속학과번호</th>
                    </tr>
                </thead>
                <tbody>
                    {MySchoolData.professor.map((v, i) => {
                        return (
                            <ProfessorItem
                                key={i}
                                id={v.id}
                                name={v.name}
                                userid={v.userid}
                                position={v.position}
                                sal={v.sal}
                                hiredate={v.hiredate}
                                comm={v.comm}
                                deptno={v.deptno}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ProfessorTable;