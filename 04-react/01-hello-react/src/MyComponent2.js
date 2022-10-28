import React from "react";

import MySubComponent1 from "./MySubComponent1";

const MyComponent2 = () => {
    return (
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>

            <MySubComponent1 />
            <MySubComponent1 />
            <MySubComponent1 />
        </div>
    );
};

export default MyComponent2;