"use strict";

// 문제1.
function printStar(max) {
    for (let i = 0; i < max; i++) {
        let str = "";
        for (let j = 0; j <= i; j++) {
            str += "*";
        }
    console.log(str);
    }
}

printStar(5);

// 문제2.
function printRevStar(max) {
    for (let i = 0; i < max; i++) {
        let str = "";
        for (let j = i; j < max; j++) {
            str += '*';
        }
    console.log(str);
    }
}

printRevStar(5);

// 문제3.
let count = 0;

function myGame(n) {
    for (let i = 1; i <= n; i++) {
        let clap = "";
        let str = "";
        let clapCount = 0;

        str = str + i;
        for (let k of str) {
            if (k == '3' || k == '6' || k == '9') {
                clapCount++;
                count++;
                clap += "짝";
            }
        }
        
        if (clap){
            console.log(`${clap}(${i}) --> ${clapCount}번`);
        } else {
            console.log(i);
        }
    }
}

myGame(35);
console.log(`\n박수를 총 ${count}번 쳤습니다.\n...`);

// 문제4.
function printStar(max, current=1) {
    if (current > max) {
        return;
    } else {
        let str = "";
        for (let i = 0; i < current; i++) {
            str += "*";
        }
    console.log(str);
    return printStar(max, current+1);
    }
}

printStar(5);

// 문제5.
function printRevStar(max, current=1) {
    if (current > max) {
        return;
    } else {
        let str = "";
        for (let i = 0; i < max; i++) {
            str += "*";
        }
    console.log(str);
    return printRevStar(max-1, current);
    }
}

printRevStar(5);