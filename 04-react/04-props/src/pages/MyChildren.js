import React from "react";

import MyChildrenSub from "../components/MyChildrenSub";
import Meta from "../components/Meta";

const MyChildren = () => {
    return (
        <div>
            <Meta title="MyChildren.js" description="여기는 MyChildren.js 파일 입니다." />
            
            <h2>MyChildren</h2>

            <MyChildrenSub width={400} height={100}><b>안녕 세상</b></MyChildrenSub>
            <MyChildrenSub width={300} height={80}>안녕 리액트</MyChildrenSub>
            <MyChildrenSub width={200} height={50} />
        </div>
    );
};

export default MyChildren;