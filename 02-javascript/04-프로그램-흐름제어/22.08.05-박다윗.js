"use strict";

console.group("문제1.");
//변수지정
const  수학 = 'B';
//논리식을 이용한 if else문
if ( 수학 == 'A' || 'B' || 'C') {
    console.log("이 과목을 Pass 했습니다.");
} else {
    console.log("이 과목을 Pass하지 못했습니다.");
}
console.groupEnd();

console.group("문제2.");
//변수지정
let count = 1;
//2를 이진수의 개수로 제곱하여 이진수 정보표시 개수를 출력
while (count <= 10) {
    console.log("이진수 %d개는 %d개의 정보를 표시가능", count, 2**count);
    count++;
}
console.groupEnd();

console.group("문제3.");
//2를 이진수의 개수로 제곱하여 이진수 정보표시 개수를 출력
for (let count = 1; count <= 10; count++) {
    console.log("이진수 %d개는 %d개의 정보를 표시가능", count, 2**count);
}
console.groupEnd();