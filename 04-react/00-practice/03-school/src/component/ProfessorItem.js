import React from "react";

const ProfessorItem = ({ id, name, userid, position, sal, hiredate, comm, deptno }) => {
    return (
        <tr align="center">
            <td>{id}</td>
            <td>{name}</td>
            <td>{userid}</td>
            <td>{position}</td>
            <td>{sal}</td>
            <td>{hiredate}</td>
            <td>{comm}</td>
            <td>{deptno}</td>
        </tr>
    );
};

export default ProfessorItem;