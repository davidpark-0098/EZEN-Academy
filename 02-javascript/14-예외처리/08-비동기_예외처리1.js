"use strict";

const data = [1, 2, 3];

try {
    setTimeout(() => {
        console.log("배열탐색시작");
        for (let i = 0; i < 10; i++) {
            console.log(data[i].toFixed(2));
        }
        console.log("배열탐색종료");
    }, 1000);
} catch (err) {
    console.log("에러발생(2)");
    console.error(err);
}

console.log("프로그램 종료");