"use strict";

const num = 123.45;
const str = "hello";
const bool = true;
const obj = new Date();
const arr = [1,2,3];
const json = {"a": 123, "b": 234}

console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);
console.log("숫자값 출력하기=%d", str);
console.log("숫자값 출력하기=%d", true);
console.log("숫자값 출력하기=%d", obj);
console.log("숫자값 출력하기=%d", arr);
console.log("숫자값 출력하기=%d", json);
console.groupEnd();

console.group("문자열 출력하기")
console.log("문자열 출력하기=%s", num);
console.log("문자열 출력하기=%s", str);
console.log("문자열 출력하기=%s", true);
console.log("문자열 출력하기=%s", obj);
console.log("문자열 출력하기=%s", arr);
console.log("문자열 출력하기=%s", json);
console.groupEnd();

console.group("객체 출력하기")
console.log("객체 출력하기=%o", num);
console.log("객체 출력하기=%o", str);
console.log("객체 출력하기=%o", true);
console.log("객체 출력하기=%o", obj);
console.log("객체 출력하기=%o", arr);
console.log("객체 출력하기=%o", json);
console.groupEnd();

console.group("JSON 출력하기")
console.log("JSON 출력하기=%j", num);
console.log("JSON 출력하기=%j", str);
console.log("JSON 출력하기=%j", true);
console.log("JSON 출력하기=%j", obj);
console.log("JSON 출력하기=%j", arr);
console.log("JSON 출력하기=%j", json);
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세 입니다.", student, age)
console.groupEnd();