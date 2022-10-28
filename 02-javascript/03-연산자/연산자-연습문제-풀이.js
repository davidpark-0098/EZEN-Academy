"use strict";

console.group("문제1.");
    const year = 2022;
    //현재 년도
    let age = year - 1998 + 1;
    //나이
    console.log(`나는 ${age}세 입니다.`);
    //출력
console.groupEnd();

console.group("문제2.")
    const age = 25;
    //나이
    var year = 2022 - (age - 1);
    //출생 년도
    console.log(`나는 ${year}년도에 태어났습니다.`);
    //출력
console.groupEnd();

console.group("문제3.");
    let numOfApples = 123;
    //총 사과 개수
    let remainder = numOfApples % 10;
    //10개씩 바구니에 사과를 담은 후 나머지
    let basketCount = (numOfApples - remainder) / 10 + (remainder > 0 ? 1 : 0);
    //사과를 담을 필요한 바구니 개수
    console.log(`${basketCount}개 바구니가 필요하다.` );
    //출력
console.groupEnd();

console.group("문제4.");
    let input = "457";
    //계산기 입력값
    console.log("%d", input - input % 100);
    //출력
console.groupEnd();