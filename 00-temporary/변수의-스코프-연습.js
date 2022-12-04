"use strict";



// if (false) {
//     var num1 = 100;
//     console.log("블록안: " + num1);
// }

// console.log("블록밖: " + num1);

// if (true) {
//     var num2 = 100;
//     console.log("블록안: " + num2);
// }

// console.log("블록밖: " + num2);

// let num3 = 100;

// if (true) {
//     let num4 = num3 + 100;
//     console.log("블록안: " + num4);
// }

// console.log("블록밖: " + num4);


//for

// for (var i = 0; i < 10; i++) {
//     console.log("반복문 안 ::: " + i);
// }

// console.log("반복문 밖 >>>" + i);


// for (let j = 0; j<10; j++) {
//     console.log("반복문 안 ::: " + j);
    
// }
// console.log("반복문 밖>>>" + j);

// x = 100;
// let x;
// console.log(x);

// y = 200;
// var y;
// console.log(y);


// const if if else if
/* const point = 78;

if (point >= 70) {
    console.log('pass 입니다.');
    if (point > 90) {
        console.log('A');
    } else if (point > 80) {
        console.log('B');
    }
    else {
        console.log('C');\
    }
} else {
    console.log('nonPass 입니다.');
} */

/* let a = 0;
let b = 0;

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("%d은 짝수", i);
        a += i;
    } else {
        console.log("%d는 홀수", i);
        b += i;
    }
    
}

console.log("1~10 까지 짝수들의 합: %d", a);
console.log("1~10 까지 홀수들의 합: %d", b); */

/* for (let i = 0; i < 3; i++) {

    console.group("i=%d", i);
    for (let j = 0; j < 5; j++) {
        console.log("i=%d, j=%d", i, j);
    }
    console.groupEnd();
} */

/* for (let i = 2; i < 10; i++) {
    console.group("%d", i);
    for (let j = 1; j < 10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
    console.groupEnd();
} */
/* 
const x = 3;
const y = 5;

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % x == 0 && i % y == 0) {
        console.log(i);
        sum += i;
    }
}

console.log("%d과 %d의 공배수의 총 합: %d", x, y, sum); */
/* 
console.group("변수 < 최대값");

for (let i = 1; i < 10; i++) {
    if (i + 1 < 10) {
        console.log(i);
    }
}
console.groupEnd(); */

/* console.group("변수 <= 최대값");

for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log(i);
    }
}
console.groupEnd(); */

/* console.group("글자 사이에 콤마(,)넣기");

let str = "";

for (let i = 1; i < 10; i++) {
    str += i;
    if (i+1 < 10) {
        str += ",";
    }
}
console.log(str);
console.groupEnd(); */

/* for (let i = 0; i < 7; i++) {
    let str = "";

    for (let j=0; j < i+1; j++) {
        str += "*";
    }
    console.log(str);
} */
/* 
for (let i = 0; i < 10; i++) {

    console.group("i에 대한 반복 수행 시작 >> i=" + i);

    for (let j = 0; j < i+1; j++) {
        console.log("i=%d, j=%d", i, j);
    }
    console.groupEnd();
} */

/* for (let i=0; i<7; i++) {
    let str = "";
    for (let j=0; j<7-i; j++) {
        str +="*";

    }
    console.log(str);
} */

/* let y = 0;

while (true) {
    y++;

    if (y % 2 == 0) {
        continue;
    }
    if(y>10) {
        break;
    }
    console.log("Hello World ::: %d", y);
} */

/* for (let i=0; true; i++) {

    if (i%2 == 0){
    continue;
    }

    if(i>10) {
        break;
    }

    console.log("Helloworld ::: %d", i);
} */

/* 
let a = 1;

if (a == 0) {
    console.log("HelloWorld");
} else if (a == 1) {
    console.log("HelloWorld22");
} */
