"use strict";




// 배열 만들기
let myArr1;

myArr1 =  [1, 3, true, "hello"];
console.log(myArr1);

let myArr2 = [1, 3, true, "hello"];
console.log(myArr2);

const len = myArr2.length;
console.log("배열의 원소 수 =%d", len);

let myArr3 = [5];
console.log(myArr3);

let myArr4 = new Array(5);
console.log(myArr4.length);




// 배열원소접근
let myArr1 = [1, 3, true, "hello"];
console.log(
    "첫번째%d, 두번째%d, 세번째%s, 네번째%s",
    myArr1[0],
    myArr1[1],
    myArr1[2],
    myArr1[3]
);




// 구조분해
let myArr2 = [100, 200, 300];
const [a, b, c] = myArr2;
console.log("a=%d, b=%d, c=%d", a, b, c);

let [b1, b2, ...rest_b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1);
console.log(b2);
console.log(rest_b);

const [o, g, j] = rest_b;
console.log("%d, %d, %d", o, g, j);

let myArr = [100];
console.log(myArr)

let item1 = myArr[0];
console.log(item1);

let item2 = myArr[1];
console.log(item2);

if (item2 !== undefined) {
    console.log("1번째 원소 존재함");
} else {
    console.log("1번째 원소 존재하지 않음");
}

let [x, y] = myArr;
console.log(x);
console.log(y);




// 반복문 활용
const myArr = new Array(5);
console.log(myArr);

const len = myArr.length;

for (let i=0; i<len; i++) {
    myArr[i] = i * 10;
} 

console.log(myArr);




// for of 반복문
const data = [4, 5, 2, 1, 3];
for (const item of data) {
    console.log(item);
} 

const data = [10, 20, 30, 40, 50];

let sum = 0;

for (let i=0; i<data.length; i++) {
    sum += data[i];
}

console.log("data총합: %d", sum);

const avg = sum + data.length;
console.log("data의 평균: %d", avg); 




// 최대값
const data = [5, 2, 7, 9, 2];

let max = data[0];

for (let i=1; i<data.length; i++) {
    if (max < data[i]) {
        max = data[i];
    }
}

console.log("최대값 = " + max); 




// 역순배치
const data = [1, 5, 2, 4, 3];
console.log(data);

const p = parseInt(data.length2);

for (let i=0; i<p; i++) {
    const k = data.length - i - 1;
    const tmp = data[i];
    data[i] = data[k];
    data[k] =tmp;
}

console.log(data); 




// 배열 순서 정렬
const data = [3, 5, 1, 4, 2];
console.log(data);

for (let i=0; i<data.length-1; i++) {
    for (let j=i+1; j<data.length; j++) {
        if (data[i] > data[j]) {
        const tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
        }
    }
}

console.log(data); 




// 2차 배열 
const a = [1, 2];
const b = [4, 5, 6, 7];
const myArr1 = [a, b];
console.log(myArr1);

var myArr2 = [ [1, 2, 3], [4, 5, 6] ];
console.log(myArr2);

console.log(myArr2[0][0]);
console.log(myArr2[0][1]);
console.log(myArr2[0][2]);
console.log(myArr2[1][0]);
console.log(myArr2[1][1]);
console.log(myArr2[1][2]);

const c = new Array(10, 20, 30);
const d = new Array(50, 60, 70);
const myArr3 = new Array(c, d);
console.log(myArr3);

const myArr4 = new Array(new Array(10, 20, 30), new Array(50, 60, 70));
console.log(myArr4);




// 2차 배열 탐색
const myArr = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(myArr.length);

console.log(myArr[0].length);
console.log(myArr[1].length);


for (let i=0; i<myArr.length; i++) {
    console.log(myArr[i]);

    for (let j=0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
}

const myArr = [
    [1, 2, 3],
    [4, 5, 6]
];

for (const item of myArr) {
    console.log(item);

    for (const sub of item) {
        console.log(sub);
    } 
}




// 가변배열
const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6];

const data = [a, b];
console.log(data);

for (let i=0; i<data.length; i++) {
    console.log(data[i]);

    for (let j=0; j<data[i].length; j++) {
        console.log(data[i][j]);
    }
}




// 성적 구하기
const grade = [
    ["철수", 92, 81, 76],
    ["영희", 72, 95, 84],
    ["민혁", 80, 86, 98]
];

let sum = 0;

for (let i=0; i<grade.length; i++) {
    let personal_sum = 0;

    for (let j=1; j<grade[i].length; j++) {
        sum += grade[i][j];
        personal_sum += grade[i][j];
    }
    const personal_avg = personal_sum / (grade[i].length-1);
    console.log("%s의 총점은 %d이고 평균은 %d입니다.", grade[i][0], personal_sum, personal_avg);
}

console.log("모든 학생의 총점은 %d입니다.", sum);




// 순차적으로 증가하는 원소
var data = new Array(6);

for (let i=0; i<data.length; i++) {
    data[i] = new Array(7);
}

console.log(data);

// 1씩 증가할 값
let counter = 1;

for (let i=0; i<data.length; i++) {
    for (let j=0; j<data[i].length; j++) {
        if (i == 0 && j<3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

console.log(data);

// 출력하기
for (let i=0; i<data.length; i++) {
    let str = "";
    for (let j=0; j<data[i].length; j++) {
        if (data[i][j] == 0) {
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }
    console.log(str);
}

let myArr = [1, 2, 3];
const myArr2 = [2];


myArr = myArr2
console.log(myArr);

myArr2[] = 3;
console.log(myArr2);
