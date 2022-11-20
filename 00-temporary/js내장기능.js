"use strict";

// isNaN
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN({a:10, b:10}));
console.log(isNaN([10, 20, 30]));
console.log(isNaN('baba'));
console.log(isNaN('123baba'));

console.log("\n");

console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(37));
console.log(isNaN('372'));
console.log(isNaN('37.213'));
console.log(isNaN(""));
console.log(isNaN(" "));

// parseFloat
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));

console.log(parseFloat('ff2'));

// parseInt
console.log(parseInt('0xF', 16));
console.log(parseInt('F', 16));
console.log(parseInt('17', 8));
console.log(parseInt('015', 10));
console.log(parseInt('15.99', 10));
console.log(parseInt('15,123', 10));
console.log(parseInt('FXX123', 16));
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));
console.log(parseInt('15e2', 10));
console.log(parseInt('15px', 10));

console.log(parseInt('-F', 16));
console.log(parseInt('-0F', 16));
console.log(parseInt('-0XF', 16));
console.log(parseInt('-15.1', 10));
console.log(parseInt('-17', 8));
console.log(parseInt('-15', 10));
console.log(parseInt('-1111', 2));

console.log(parseInt('hello', 8));

// encodeURI(string)
const set1 = ';,/?;@&=+$#';
const set2 = "-_.!~*()";
const set3 = 'ABC abc 123';
const set4 = "자바스크립트";

const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.log(enc1, enc2, enc3, enc4);

console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));

// encodeURIComponent(string)
const set1 = ';,/?;@&=+$#';
const set2 = "-_.!~*()";
const set3 = 'ABC abc 123';
const set4 = "자바스크립트";

const enc1 = encodeURIComponent(set1);
const enc2 = encodeURIComponent(set2);
const enc3 = encodeURIComponent(set3);
const enc4 = encodeURIComponent(set4);

console.log(enc1, enc2, enc3, enc4);

console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));

// setTimeout
function foo() {
    for (let i = 0; i < 10; i++) {
        console.log(`2 x ${i} = ${i*2}`);
    }
}

setTimeout(foo, 1000);
console.log("구구단을 외자!!");

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log(`3 x ${i} = ${i*3}`);
    }
}, 1500);
console.log("프로그램 종료!!");

// setInterval
let count = 0;

const timerId1 = setInterval(() => {
    count++;
    console.log(`타이머 ${count} 번째 자동 실행`);
    if (count == 5) {
        console.log("타이머 종료");
        clearInterval(timerId1);
    }
}, 1000);
console.log(`타이머1 시작`);


let count2 = 0;

const timerId2 = setInterval(() => {
    count2++;
    console.log(`타이머2 ${count2} 번째 자동 실행`);
    
    if (count2 == 5) {
        console.log(`타이머2 종료`);
        clearInterval(timerId2);
    }
}, 1000);
console.log(`타이머2 시작`);

// String
const str1 = "Hello World";
console.log(str1);

const str2 = new String("Hello JavaScript");
console.log(str2);

const msg = "Life is too short, You need JavaScript.";
console.log("문자열 : " + msg);

const len = msg.length;
console.log("문자열의 길이: " + len);

const str2nd = msg.charAt(2);
console.log("두 번째 글자" + str2nd);
console.log("두 번째 글자" + msg[2]);

const p1 = msg.indexOf("f");
console.log("`f`가 처음 나타나는 위치:" + p1);

console.log("`z`가 처음 나타나는 위치:" + msg.indexOf("z"));
console.log("`short`가 처음 나타나는 위치:" + msg.indexOf("short"));

// ????
const p2 = msg.indexOf("i");
const p3 = msg.indexOf("i", p2+5);
console.log("`i`가 처음 나타나는 위치:" + p2);
console.log("`i`가 두번째로 나타나는 위치:" + p3);

const p4 = msg.lastIndexOf("a");
console.log("`a`의 마지막 위치:" + p4);

// 응용
if (msg.indexOf("Hello") > -1) {
    console.log("Hello가 포함됨");
} else {
    console.log("Hello가 포함되지 않음.");
}

const substring1 = msg.substring(0, 17);
console.log("문자열 자르기:" + substring1);

const substring2 = msg.substring(19);
console.log("문자열 자르기:" + substring2);

const up = msg.toUpperCase();
console.log("모든 글자의 대문자 변환:" + up);

const low = msg.toLowerCase();
console.log("모든 글자의 대문자 변환:" + low);

const src1 = " Hello World ";
const src2 = src1.trim();
console.log(src1);
console.log(src2);

const txt = "HTML, CSS, JavaScript";
const arr = txt.split(",");
console.log(arr);

const txt2 = txt.replace(",", "$");
console.log(txt2);

const test = "Hello JavaScript, World JavaScript";
console.log(test.replaceAll("JavaScript", "자바스크립트"));

// math
var max = Math.max(100, 200, 300);
console.log("최대값" + max);

var min = Math.min(100, 200, 300);
console.log("최소값" + min);

var num1 = 3.165436;
console.log("소수점 반올림" + Math.round(num1));

console.log("소수점 올림" + Math.ceil(num1));
console.log("소수점 내림" + Math.floor(num1));

var num2 = -123;
console.log("절대값: " + Math.abs(num2));

console.log("난수:" + Math.random());

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

var rnd = random(0, 9);
console.log("0~9 사이의 난수:" + rnd);

// 응용
var auth = "";
for (var i = 0; i < 5; i++) {
    auth += random(0, 9);

}
console.log("인증번호: " + auth);

// date1
const days = ['일', '월', '화', '수', '목', '금', '토'];

const date1 = new Date();

const yy = date1.getFullYear();
const mm = date1.getMonth() + 1;
const dd = date1.getDate();

const i = date1.getDay();
const day = days[i];

const hh = date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

var result = yy + '-' + mm + '-' + dd + ' '+ day + '요일 ' + hh + ':' + mi + ':' + ss;
console.log(result);


console.log(date1.toDateString());

console.log(date1.toISOString());

console.log(date1.toLocaleString());
console.log(date1.toLocaleString('de-DE'));
console.log(date1.toLocaleString('ko-KR'));

console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString('de-DE'));
console.log(date1.toLocaleDateString('ko-KR'));

var date2 = new Date(2021, 9, 5);
console.log(date2.toLocaleString('ko-KR'));

var date3 = new Date(2021, 9, 5, 21, 19, 31);
console.log(date3.toLocaleString('ko-KR'));

date3.setYear(2222);
date3.setMonth(2);
date3.setDate(24);
date3.setHours(22);
date3.setMinutes(22);
date3.setSeconds(22);
console.log(date3.toLocaleString('ko-KR'));

// date2
const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

const prevDate = new Date(date.getFullYear(), 0, 1);
const ts2 = prevDate.getTime();
const tmp1 = ts1 - ts2;
console.log(tmp1);

const day1 = Math.floor(tmp1 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day1 + "일 지났습니다.");

const nextDay = new Date(date.getFullYear(), 11, 31);
const ts3 = nextDay.getTime();
const tmp2 = ts3 - ts1;
const day2 = Math.ceil(tmp2 / (24 * 60 * 60 * 1000));
console.log("올해는 " + day2 + "일 남았습니다.");


const a = date.getDate() + 30;
date.setDate(a);
console.log(date.toLocaleString('ko-KR'));

const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));

const today = new Date();
today.setDate(1);
const startDay = today.getDay();
console.log(startDay);


const m = today.getMonth();
today.setMonth(m+1);
today.setDate(0);
const lastDate = today.getDate();
console.log(lastDate);

var data = new Array(6);
for (let i=0; i<data.length; i++) {
    data[i] = new Array(7);
}

let counter = 1;

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i == 0 && j < startDay || counter > lastDate) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

for (let i = 0; i < data.length; i++) {
    let str = '';
    for (let j = 0; j < data[i].length; j++) {
        str += data[i][j] == 0 ? " \t" : (data[i][j]) + "\t";
    }
    console.log(str);
}

// number
const k = "123";
console.log(typeof parseInt(k));
console.log(typeof parseFloat(k));

var a = new Number(123);
console.log(a);
console.log(typeof a);
console.log(a == 123);
console.log(a === 123);

var b = Number('123');
console.log(b);
console.log(typeof b);
console.log(b === 123);

var b = Number('123.45');
console.log(b);
console.log(typeof b);
console.log(b === 123.45);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.NaN);
console.log(isNaN(Number.NaN));

console.log(Number.isNaN('123'));

console.log(Number.isInteger('123'));
console.log(Number.isInteger(123));

console.log(Number.parseFloat(123));

console.log(Number.parseInt('123'));

// Regex
const username = "자바스크립트1";
const age = '2오냐';
const userid = 'js123가즈아@@';

const pattern1 = /^[ㄱ-ㅎ가-힣]*$/;

if (!pattern1.test(username)) {
    console.log('이름은 한글만 입력 가능합니다.');
}

const pattern2 = /^[0-9]*$/;
if (!pattern2.test(age)) {
    console.log('나이는 숫자만 입력 가능합니다.');
}

const pattern3 = /^[a-zA-Z0-9]*$/;
if (!pattern3.test(userid)) {
    console.log('아이디는 영어+숫자 조합으로만 가능합니다.');
}

if (userid.length > 20) {
    console.log('아이디는 최대 20자 까지만 입력 가능합니다.');
}

console.log('검사완료!!');

// test
const txt = "html, css, javascript";
const arr = txt.split(",");
console.log(arr);

//  Array
const data = [10, 20, 30, 40, 50];

data.push(60, 70);
console.log(data);

const k = data.pop();
console.log(k);
console.log(data);

const x = data.shift();
console.log(x);
console.log(data);

data.unshift(0, 10);
console.log(data);


const data = [10, 20, 30, 40, 50];

const z = data.splice(2, 3);
console.log(z);
console.log(data);

data.splice(0, 2, 'a', 'b', 'c');
console.log(data);

data.splice(3, 0, 'd', 'e');
console.log(data);

const a = [1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];
const d = a.concat(b, c);
console.log(d);

let arr1 = [1, 0, false];

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(null));

console.log(arr1.includes(1));
console.log(arr1.includes(100));

const arr2 = [NaN];
console.log(arr2.indexOf(NaN));
console.log(arr2.includes(NaN));


// Array2
const arr1 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr1.length; i++) {
    if (i == 3) {
        console.log('반복중단!');
        break;
    }
    console.log('%d번째 원소 ===>%d', i, arr1[i]);
}

console.log('-------------');



const arr2 = [10, 20, 30, 40, 50];

arr2.forEach((v, i) => {
    if (i == 3) {
        console.log('인덱스가 3입니다.');
        return;
    }
    console.log('%d번째 원소 ===>%d', i, v);
});

console.log('-------------');



const arr3 = [10, 20, 30, 40, 50];

arr3.some((v, i) => {
    if (i == 3) {
        console.log('반복중단!');
        return true;
    }
    console.log('%d번째 원소 ===>%d', i, v);
});

console.log('-------------');

const arr4 = [10, 20, 30, 40, 50];
const hello =arr4.map((v, i) => {
    return v * 10;
});
console.log(hello);

const arr5 = [10, 20, 30, 40, 50];
const world = arr5.map((v, i) => v * 10);

console.log(world);


const arr6 = [5, 12, 8, 131, 44];

const found = arr6.find(v => {
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(found);



const arr7 = [5, 12, 8, 131, 44];
const d1 = [];

for (let i = 0; i < arr7.length; i++) {
    if(arr7[i] % 2 == 0) {
        d1.push(arr7[i]);
    }
}
console.log(d1);



const arr8 = [5, 12, 8, 131, 44];
const d2 = [];

arr8.forEach((v, i) => {
    if (v % 2 == 0) {
        d2.push(v);
    }
});
console.log(d2);


const arr9 = [5, 12, 8, 131, 44];
const d3 = arr9.filter((v, i, arr) => {
    console.log('v=%d, i=%d, arr=%s', v, i, arr);
    if (v % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(d3);


// 배열 정렬
const arr10 = [2, 1, 15, 10, 8];

// arr10.sort();
// console.log(arr10);

arr10.sort((a, b) => {
    console.log('a=%s, b=%s', a, b);
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(arr10);


let arr11 = [1, 2, 3, 4, 5];

arr11.reverse();
console.log(arr11);



let arr12 = [1, 2, 3, 4, 5];

const result = arr12.reduce((acc, cur, i, arr) => {
    console.log(`acc=${acc}, cur=${cur}, i=${i}, arr=${arr}`);
    return acc + cur;
}, 0);

console.log(`result=${result}`);

let arr12 = [1, 2, 3, 4, 5];

const result = arr12.reduce((acc, cur, i, arr) => acc + cur, 0);

console.log(`result=${result}`);