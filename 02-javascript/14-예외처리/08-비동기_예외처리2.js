"use strict";

const data = [1, 2, 3];

setTimeout(() => {
    try {
        console.log("배열탐색시작");
        for (let i = 0; i < 10; i++) {
            console.log(data[i].toFixed(2));
        }
    } catch (err) {
        console.log("에러발생(2)");
        console.error(err.name);
        console.error(err.message);
    }
    console.log("배열탐색종료");
}, 1000);

console.log("프로그램 종료");