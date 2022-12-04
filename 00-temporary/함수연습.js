"use strict";

//함수의 사용
function sayHello() {
    console.log("Hello JavaScript!");
    console.log("안녕하세요 자바스크립트!");

}

sayHello();

for (let i = 0; i < 5; i++) {
    sayHello();
}

//파라미터
function f(x) {
    let y = x +1;
    console.log(y);
}

f(100);
f(50);
f(10);

// 다중파라미터
function sum(x, y , z = "값이 없음") {
    let result = x + y + z;
    console.log(result);
}

sum(1, 2);
sum(50, 100);

// 파라미터 생략
function foo(x, y) {
    console.log("x=" + x + ", y=" + y);

    let result = 0;
    if (x != undefined) {result += x;}
    if (y != undefined) {result += y;}

    console.log("result=" + result);
}

foo(100, 200);
foo(500);
foo();

// 파라미터기본값
function bar(x=1, y=2) {
    console.log("x=" + x + ", y=" + y);
    let result = x+y;
    console.log("result=" + result);
}

bar(100, 200);
bar(500);
bar();

// 리턴
function getTimes(x, y) {
    const z = x * y;
    return z;
}

console.log(getTimes(123, 45));

console.log(getTimes(123, 45) + 10000);

getTimes(100, 20);

//실행중단
function returnBreak(x, y) {
    if (x < 10) {
        return -1;
    }
    if (y < 10) {
        return -2;
    }
    return x + y;
}

console.log(returnBreak(1, 100));
console.log(returnBreak(100, 1));
console.log(returnBreak(100, 20));

// 함수대입
function sayHello(msg) {
    console.log("sayHello(" + msg + ")");
}

sayHello("안녕하세요 자바스크립트!");

const say = sayHello;

say("Hello JavaScript");

const test = msg => '안녕';


console.log(test());

// 익명함수
const say = function(msg) {
    console.log("sayHello(" + msg + ")");
};

say("Hello JavaScript");

// 화살표함수
const foo = x => {
    for (let i = 0; i < x; i++) {
        console.log("Hello World");
    }
};

foo(7);

const foo = (x) => {
    for (let i = 0; i < x; i++) {
        console.log("Hello World");
    }
};

foo(7);

const foo = (x, y) => x + y;

console.log(foo(7,3 ));

// 콜백함수
function something(x, y, cb) {
    const result = cb(x, y);
    console.log(`x, y 연산결과 ${result}`);
}

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

something(100, 50, plus);
something(100, 50, minus);

something(200, 100, function(a, b) {
    return a * b;
});

something(5, 7, (a, b) => a + b);