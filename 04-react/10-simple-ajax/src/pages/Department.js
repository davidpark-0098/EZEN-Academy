import React, { memo, useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../components/Spinner";

const Department = memo(() => {
    const [loading, setLoading] = useState(false);
    const [department, setDepartment] = React.useState([]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            let json = null;

            try {
                const response = await axios.get("/department");
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패하였습니다.\n${e.message}`);
                return;
            } finally {
                setLoading(false);
            }

            setDepartment(json);
        })();
    }, []);

    return (
        <div>
            <Spinner loading={loading} width={70} height={70} color={"#000000"} glassColor={"#ffffff"} />

            <table border="1">
                <thead>
                    <tr>
                        <th>학과번호</th>
                        <th>학과명</th>
                        <th>학과위치</th>
                    </tr>
                </thead>
                <tbody>
                    {!department.length ? (
                        <tr>
                            <td colSpan="3" align="center">
                                검색결과가 없습니다.
                            </td>
                        </tr>
                    ) : (
                        department.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.dname}</td>
                                    <td>{item.loc}</td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
});

export default Department;
