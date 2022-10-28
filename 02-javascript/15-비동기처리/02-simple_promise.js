"use strict";

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

function getLuckyResult() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("당신의 추첨 결과는...?");
            const lucky = random(1, 9);

            if (lucky % 2 == 0) {
                resolve({msg: "당첨입니다~!!", a: 1, b: 2, c: 3});
            } else {
                reject({msg: "꽝~!!", d: -1, e: -2});
            }
        }, 1000);
    });
}
const mypromise = getLuckyResult();

mypromise.then(({msg, a, b, c}) => {
    console.log("%s, a=%d, b=%d, c=%d", msg, a, b, c);
}).catch(({msg, d, e}) => {
    console.error("%s, d=%d, e=%d", msg, d, e);
}).finally(() => {
    console.log("fin :)");
});

// console.log("추점중~~~");