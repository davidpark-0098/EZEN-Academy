"use strict";

// 변수그룹
/* const student = {
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1231-2342"
};

console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();

console.group("출력 type2");
console.log("학번: " + student['studno']);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();

const keyName = "phoneno";
console.log(student[keyName]);

const keys = Object.getOwnPropertyNames(student);
console.log(keys);

for (const k of keys) {
    console.log(student[k]);
}

for (const k in student) {
    console.log(student[k]);
} */

// 복합자료구조
/* const company = {
    name : "(주)굿모닝컴페니",
    since : 2013,
    department : ["기획팀", "디자인팀", "개발팀"]
};

console.log(company.name);
console.log(company['since']);
console.log(company.department[0]);
console.log(company.department[1]);
console.log(company['department'][2]); */

// 계층구조
/* var centerPoint = {
    x: 5,
    y: 10
};

var circle1 = {
    center: centerPoint,
    radius: 5.10
};

console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius);


var circle2 = {
    center: {
        x: 5,
        y: 10
    },
    radius: 5.10
};

console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius); */

// 목록구조
/* const student1 = {
    studno: 10101,
    grade: 1,
    name: "학생1"
};

const student2 = {
    studno: 20202,
    grade: 2,
    name: "학생2"
};

const classRoom = {
    student: [student1, student2]
};

console.log(classRoom);

for (let i=0; i<classRoom.student.length; i++) {
    console.group(i +"번째 학생")
    console.log(classRoom.student[i].studno);
    console.log(classRoom.student[i].grade);
    console.log(classRoom.student[i].name);
    console.groupEnd();
}

let i = 0;
for (const s of classRoom.student) {
    console.group(i +"번째 학생")
    console.log(classRoom.student[i].studno);
    console.log(classRoom.student[i].grade);
    console.log(classRoom.student[i].name);
    console.groupEnd();
    i++;
} */

// 목록구조2
/* const classRoom = {
    student: [{
        studno: 10101,
        grade: 1,
        name: "학생1"
    }, {
        studno: 20202,
        grade: 2,
        name: "학생2"
    }]
};

let i = 0;
for (const s of classRoom.student) {
    console.group(i +"번째 학생")
    console.log(classRoom.student[i].studno);
    console.log(classRoom.student[i].grade);
    console.log(classRoom.student[i].name);
    console.groupEnd();
    i++;
} */

// 목록구조3
/* const bbs = {
    title: "공지사항",
    count: 4,
    item: [
        {id: 1, subject: '첫 번째 게시물 제목'},
        {id: 2, subject: '두 번째 게시물 제목'},
        {id: 3, subject: '세 번째 게시물 제목'},
        {id: 4, subject: '네 번째 게시물 제목'},
    ]
};

console.log("게시판 이름: " + bbs.title);
console.log("전체 게시물 수: " + bbs.count);

console.group("일반 for문");
for (let i=0; i<bbs.item.length; i++) {
    console.log(bbs.item[i].id + bbs.item[i].subject);
}

for (const k of bbs.item) {
    console.log(k.id + k.subject);
} */

// JSON확장
/* const foo = {
    name: "JavaScript",
    age: 19
};

console.log(foo.email);

const nextAge = foo.rara + 1;
console.log(nextAge);

foo.email = "hello@world.com";
console.log(foo);

const myJson = {};
console.log(myJson);

for (let i=0; i<10; i++) {
    const key = "value" + i;
    myJson[key] = i *100;
}

console.log(myJson); */

// 참조복사
let a = 100;
let b = a;
console.log("a=" + a + ", b=" + b);

a++;
console.log("a=" + a + ", b=" + b);

const user = {
    name: "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "kim";
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);

const a1 = [1, 2, 3];

const a2 = new Array(a1.length);

for (let i=0; i<a1.length; i++) {
    a2[i] = a1[i];
}

const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);


const addr = {
    city: '서울',
    gu: '서초'
};

const copy = {};

for (let key in addr) {
    copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = '강남';

console.log(addr);
console.log(copy);


const copy2 = {};

Object.assign(copy2, addr);
console.log(copy2);


// 구조분해
/* const object = {a: 1, b: 2, c: 3};

const {a, b, c} = object;

console.log(a);
console.log(b);
console.log(c);

const arr = [100, 200];

const [x, y] = arr;
console.log(x);
console.log(y);

const data = { name: 'hello', age:20, height: 172, weight:85 };
const {name} = data;
console.log(name);

const {height: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);

const dummy = {a1:100, a2: 200, a3:300, a4:400};
const {a1, a2, ...rest_b} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);

const origin = {name: 'javascript', age: 25};
const newdata1 = {...origin, gender: 'M'};
console.log(newdata1);

const newdata2 = {...origin, age:30, gender:'F'};
console.log(newdata2); */

// 옵셔널체이닝

const user = {adress: {city: 100}};
console.log(user?.address?.city);
