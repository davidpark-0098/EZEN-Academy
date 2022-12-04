"use strict";

// 고전적예외처리
function foo(x, y) {
    if (x < 0 && y < 0) {
        return 0;
    }
    return x + y;
}
console.log(foo(10, 20));
console.log(foo(-1, -2));

const k = foo(-1, -2);

if (k == 0) {
    console.log("x와 y가 0보다 작습니다.");
} else {
    console.log(k);
}

// try catch
const data = [1, 2, 3];
console.log('배열 탐색 시작');

try {
    for (let i = 0; i < 10; i++) {
        console.log(data[i].toFixed(2));
    }
    console.log('try 블록 실행 완료');
} catch (err) {
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('배열 탐색이 종료');
}
console.log('프로그램 종료');

// 에러객체
let err = new Error("이상한 일이 벌어졌습니다.");
console.log("에러이름: %s", err.name);
console.log("에러내용: %s", err.message);

throw err;

console.log("프로그램 종료");

// 에러객체2
let err = new Error("이상한 일이 벌어졌습니다.");

try {
    throw err;
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}
console.log("프로그램 종료");

// 예외객체를통한-예외처리
function foo(x, y) {
    if (x < 0) {
        throw new Error("x가 0보다 작습니다.");
    }
    if (y < 0) {
        throw new Error("y가 0보다 작습니다.");
    }
    return x + y;
}

const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

try {
    b = foo(10, -1);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

console.log(a);
console.log(b);

// 사용자정의 에러
class XlessError extends Error {
    constructor(msg) {
        super(msg);
        super.name = 'XlessError';
    }
}

class YlessError extends Error {
    constructor(msg) {
        super(msg);
        super.name = 'YlessError';
    }
}

function foo(x, y) {
    if (x < 0) {
        throw new XlessError("x가 0보다 작습니다.");
    }
    if (y < 0) {
        throw new YlessError("y가 0보다 작습니다.");
    }
    return x + y;
}

const a = null;
const b = null;

try {
    a = foo(-1, 10);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

try {
    b = foo(10, -1);
} catch (err) {
    console.log("에러이름: %s", err.name);
    console.log("에러내용: %s", err.message);
}

console.log(a);
console.log(b);


// static 연습
class Test {
    constructor() {
        this.value = "testValue"
    }

    static staticThis() {
        return this
    }

    normalThis() {
        return this
    }

}

console.log(Test.staticThis());
console.log(Test.staticThis().value);
// [class Test]  |  undefined

const test = new Test();
console.log(test.normalThis());
console.log(test.normalThis().value);

// Test { value: 'testValue' }  |  testValue