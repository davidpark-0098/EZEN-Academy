"use strict";

// 문제.1
let student = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (let p of student) {
    result[p]++;
}

console.log(result);

// 문제2.1
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
    };
let avg = 0;

for (let s in exam) {
    let personal_sum = 0;

    for (let j = 0; j < 4; j++) {
    personal_sum += exam[s][j];
    }

avg = personal_sum / 4;
console.log(`${s}의 총점은 ${personal_sum}점 이고 평균은 ${avg}점 입니다.`);
}

// 문제2.2
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
    };
let sum = 0;
let avg = 0;

for (let s in exam) {
    sum += exam[s][2];
}

avg = sum / 4;
console.log(`모든 학생의 수학 총점은 ${sum}점 이고 평균은 ${avg}점 입니다.`);

// 문제3.1
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
    ]
let sum = 0;
let avg = 0;

for (let i = 0; i < covid19.length; i++) {
        sum += covid19[i].active;
}

avg = sum / covid19.length;
console.log(`누적 확진자 수: ${sum}명`);
console.log(`평균 확진자 수: ${avg}명`);

// 문제3.2
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
    ];
let max = covid19[0];

for (let i=1; i<covid19.length; i++) {
    max.active < covid19[i].active ? max = covid19[i] : undefined;
}

console.log(`확진자가 가장 많이 나타난 날: ${max.date}`);