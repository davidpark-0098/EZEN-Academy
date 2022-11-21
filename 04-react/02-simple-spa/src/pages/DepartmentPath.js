import React from 'react';

import { useParams } from "react-router-dom";

const DepartmentPath = () => {
    console.clear();

    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.log(params);
    console.groupEnd();

    console.group("파라미터 처리 결과 확인");
    console.log('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.log('요청된 메시지 내용=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    const departmentList = {
        item: [
            { id: 201, dname: '전자공학과', loc: '3호관' },
            { id: 202, dname: '기계공학과', loc: '4호관' }
        ]
    };
    
    const id = parseInt(params.id);

    let departmentItem = departmentList.item.find(v => v.id === id);
    // let departmentItem = null;

    // departmentList.item.some((item, index) => {
    //     if (item.id === id) {
    //         departmentItem = item;
    //         return true;
    //     }
    //     return false;
    // });

    if (!departmentItem) {
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    )
};

export default DepartmentPath;