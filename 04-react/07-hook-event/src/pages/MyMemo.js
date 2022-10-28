import React, { useState } from "react";
import { useMemo } from "react";
import dayjs from "dayjs";

const MyMemo = () => {
    const day = dayjs();

    const getLength = (w) => {
        console.log("getLength(%s) 호출됨! :::: $s", w, day.format("YY-MM-DD hh:mm:ss.ms"));
        return w.length;
    };

    const words = ["City", "Eye", "Apple", "Apple", "Orange"];

    const [myCount, setMyCount] = useState(0);
    const [myIndex, setMyIndex] = useState(0);
    const [myWord, setMyWord] = useState(words[myIndex]);

    const myLen = useMemo(() => {
        return getLength(myWord);
    }, [myWord]);

    return (
        <div>
            <h2>MyMemo</h2>
            <p>
                {myIndex}번째 단어 "{myWord}"의 길이: {myLen}
            </p>
            <button
                onClick={() => {
                    const next = (myIndex + 1) % words.length;
                    setMyIndex(next);
                    setMyCount(myCount + 1);
                    setMyWord(words[next]);
                }}
            >
                버튼 클릭
            </button>
        </div>
    );
};

export default MyMemo;
