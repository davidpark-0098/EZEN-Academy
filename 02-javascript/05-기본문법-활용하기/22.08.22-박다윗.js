"use strict";

// 문제1.
for (let i=9; i>=0; i-=2) {
        console.log("%d", i);
}

// 문제2.
let i = 9;

while (i >= 0) {
    console.log("%d", i);
    i-=2;
}

// 문제3.
let a = 0;
let b = 0;

for (let i=1; i<20; i++) {
    if (i%2 == 0) {
        a += i;
    }
    if (i%3 == 0) {
        b += i;
    }
}

console.log("%d", a + b);
// 문제3. 공배수?
let a = 0;

for (let i=1; i<20; i++) {
    if (i%2 == 0 || i%3 == 0) {
        a += i;
    } 
}

console.log("%d", a);

// 문제4.
let count = 0;

for (let i=1; i<=6; i++) {
    for (let j=1; j<=6; j++) {
        if (i+j == 6) {
            console.log("[ %d, %d ]", i, j);
            count++;
        }
    }
}

console.log("경우의 수는 %d개 입니다.", count);

// 문제5.
for (let i=0; i<4; i++) {

    let a = "";

    for (let j=i; j<4+i; j++) {
        a += j;
        if (j+1 < i+4) {
            a += " ";
        }
        
    }
    console.log(a);
}

// 문제6.
let a = "1";
let b = 2;

for (let i=0; i<7; i++) {
    console.log(a);
    a += b;
    b++;
}

// 문제7.
const number = 1;

if (number == 1) {
    for (let i=3; i<10; i+=2) {
        for (let j=1; j<10; j++) {
            console.log("%d x %d = %d", i, j, i*j);
        }
    }
} else if (number == 2) {
    for (let g=2; g<10; g+=2) {
        for (let h=1; h<10; h++) {
            console.log("%d x %d = %d", g, h, g*h);
        }
    }
} else {
    console.log("이 변수에는 1이나 또는 2밖에 저장될 수 없습니다.");
}
// 문제7. 풀이
const number = 1;

for (let i=4-number; i<10; i+=2) {
    for (let j=1; j<10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}