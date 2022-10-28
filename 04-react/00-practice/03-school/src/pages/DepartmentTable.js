import React from "react";

import MySchoolData from "../MySchoolData";
import DepartmentItem from "../component/DepartmentItem";

function DepartmentTable() {
    return (
        <div>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>학과번호</th>
                        <th>학과이름</th>
                        <th>위치</th>
                    </tr>
                </thead>
                <tbody>
                    {MySchoolData.department.map((v, i) => {
                        return <DepartmentItem key={i} id={v.id} dname={v.dname} loc={v.loc} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DepartmentTable;