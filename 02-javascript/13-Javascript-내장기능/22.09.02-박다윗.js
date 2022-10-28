"use strict";

// 문제1.
const email = String("hahahoho@naver.com");

const e = email.indexOf("@");
console.log(email.substring(0, e));
console.log(email.substring(e + 1));

// 문제2.
const ssn = '020517-3******';
const date = new Date();
const now_year = date.getFullYear();
const BN = ssn.charAt(7)

const sex = BN % 2 == 1 ? "남자" : "여자";
const yy = ((parseInt(BN - 0.5) / 2 * 100) + 1900) + Number(ssn.substring(0, 2));
const age = now_year - yy + 1;

console.log(`${yy}년 ${Number(ssn.substring(2, 4))}월 ${Number(ssn.substring(4, 6))}일에 태어난 ${age}세 ${sex} 입니다.`);

// 문제3.
const str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
let word = "수업시간";
let count = 0;
let next = 0;

while (str.indexOf(word) > -1) {
    next = str.indexOf(word, next);
    next = next + 1;
    count++;
    
    if (str.indexOf(word, next) == -1) {
        break;
    }
}

console.log(count);

// 문제4.
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const lotto = [];

while (lotto.length < 6) {
    let lottoNum = random(1, 6);
    if (!lotto.includes(lottoNum)) {
        lotto.push(lottoNum);
    }
}
console.log(lotto);

// 문제5.
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const balls = new Array(45);
const lotto = [];

for (let i = 0; i < 45; i++) {
    balls[i] = i+1;
}

while (lotto.length < 6) {
const lottoNum = balls.splice(random(0, balls.length - 1), 1);

lotto.push(Number(lottoNum));
}
console.log(lotto);

// 문제6.
function solution(participant, completion) {
    var answer = '';
    for (let k of participant) {
        if (!completion.includes(k)) {
            answer = k;
        }
    }
    return answer;
}

console.log(solution(["leo", "kiki", "eden"],
["eden", "kiki"]));

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],
["josipa", "filipa", "marina", "nikola"]));

console.log(solution(["mislav", "stanko", "steave", "ana"],
["stanko", "ana", "mislav"]));