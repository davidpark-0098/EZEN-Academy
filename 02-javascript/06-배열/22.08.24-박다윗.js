"use strict";

// 문제1.
var check_list = [true, false, false, true, false];
console.log("before -->" + check_list);

for (let i = 0; i < check_list.length; i++) {
    check_list[i] = !check_list[i];
}

console.log("after -->" + check_list);


// 문제2.
var grade = [75, 82, 91];
var sum = 0, avg = 0;

for (let i = 0; i < grade.length; i++) {
    sum += grade[i];
}

avg = sum / grade.length;
avg = avg.toFixed(2);
console.log("총점: " + sum + "점, 평균점수: " + avg + "점");
// 문제2. for of
var grade = [75, 82, 91];
var sum = 0, avg = 0;

for (const i of grade) {
    sum += i;
}

avg = sum / grade.length;
avg = avg.toFixed(2);
console.log("총점: " + sum + "점, 평균점수: " + avg + "점");

// 문제3.
var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;

for (let i = 0; i < time.length; i++) {
    if (i > 3) {
        money += 5200 * time[i];
    } else {
        money += 4500 * time[i];
    }
}

console.log("1주일간의 전체 급여: " + money + "원");
// 문제3. 풀이
var time = [7, 5, 5, 5, 5, 10, 7];
var money = 0;

for (let i = 0; i < time.length; i++) {
    money += i > 3 ? time[i] * 5200 : time[i] * 4500;
}

console.log("1주일간의 전체 급여: " + money + "원");

// 문제4.
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;

for (let i = 0; i < price.length; i++) {
    money += price[i] * qty[i];
}

console.log("전체 결재 금액: " + money + "원");

// 문제5.
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;
var sum = new Array(4);

for (let i = 0; i < price.length; i++) {
    sum[i] = price[i] * qty[i];
}
for (let j = 1; j<sum.length; j++) {
    if (sum[0] < sum[j]) {
        sum[0] = sum[j];
    }
}

console.log("가장 높은 상품금액: " + sum[0] + "원");
// 문제5. 다시 풀었을때 이게 맞음
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;
let sum = 0;

money = price[0] * qty[0];

for (let i = 1; i < price.length; i++) {
    sum = price[i] * qty[i];
    if (money < sum) {
        money = sum;
    }
}

console.log("가장 높은 상품금액: " + money + "원");

// 문제6.
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;
var sum = new Array(4);
var count = 0;

for (let i = 0; i < price.length; i++) {
    sum[i] = price[i] * qty[i];
}
for (let j = 0; j<sum.length; j++) {
    if (80000 <= sum[j]) {
        count++;
    }
}

console.log("무료배송 항목: " + count + "건");
// 문제6. 다시풀었을대 이게 맞음
var price = [38000, 20000, 17900, 17900];
var qty = [6, 4, 3, 5];
var money = 0;
var count = 0;

for (let i = 0; i < price.length; i++) {
    money = price[i] * qty[i];
    if (80000 <= money) {
        count++;
    }
}

console.log("무료배송 항목: " + count + "건");

// 문제7. 다시보기
var price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 --> " + price);

for (var i=0; i<price.length-1; i++) {
    for (var j=i+1; j<price.length; j++) {
        if (price[i] > price[j]) {
            var tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}

console.log("낮은가격순 --> " + price);

// 문제8.
var arr = [5, 3, 2 ,8, 9];
console.log('before -->' + arr);

for (var i=0; i<parseInt(arr.length/2); i++) {
    var tmp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = tmp;
}

console.log('after --> ' + arr);

// 문제9.
var student = ['둘리', '도우너', '또치', '희동'];
var grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];
var sum = 0, avg = 0;

for (let i=0; i<student.length; i++) {
    sum = 0;
    for (let j=0; j<grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    console.log(student[i] + " 총점: " + sum + "점," + " 평균: " + avg.toFixed(2) + "점");
}

// 문제10.
var student = ['둘리', '도우너', '또치', '희동'];
var grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98]
];
var sum = 0, avg = 0;
let avgSum = 0;

for (let i=0; i<student.length; i++) {
    sum = 0;
    for (let j=0; j<grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    avgSum += avg;
    console.log(student[i] + " 총점: " + sum + "점," + " 평균: " + avg.toFixed(2) + "점");
}

avgSum = avgSum / student.length;
console.log("반평균=" + avgSum.toFixed(1) + "점");

// 문제11.
let item = [
    [500, 291],
    [320, 586],
    [100, 460],
    [120, 558],
    [92, 18],
    [30, 72]
];

let itemPrice = 0;
let itemQty = 0;
let sum = 0;

for (let i=0; i<item.length; i++) {
    for (let j=0; j<item[i].length; j++) {
        if (j == 0) {
        itemPrice = item[i][j]
        } else {
        itemQty = item[i][j]
        }
    }
    sum += itemPrice * itemQty * 9 / 10;
}

console.log("아이템 총 판매가격: " + sum + "G");
// 문제11. 다시 푼게 맞음 ㅋㅋ
let item = [
    [500, 291],
    [320, 586],
    [100, 460],
    [120, 558],
    [92, 18],
    [30, 72]
];
let sum = 0;

for (let i=0; i<item.length; i++) {
    sum += item[i][0] * item[i][1] * 0.9;
}

console.log("아이템 총 판매가격: " + sum + "G");

// 문제12.
let ssn = [0, 1, 1, 2, 1, 3, 1, 0, 0, 0, 1, 2, 3]
let g = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
let sum = 0;

for (let i=0; i<g.length; i++) {
    sum += ssn[i] * g[i];
}

sum = ((11 - (sum % 11)) % 10) % 10;

if (sum === ssn[12]) {
    console.log("유효한 주민번호");
} else {
    console.log("유효하지 않은 주민번호");
}