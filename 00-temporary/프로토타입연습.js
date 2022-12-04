"use strict";


/* // 생성자
function User() {
    this._id = null;
    this.email = null;
}

const foo = new User();
foo._id = "hello";
foo._email = "hello@javascrit.com";
console.log(foo);

const bar = new User();
foo._id = "world";
foo._email = "bar@javascrit.com";
console.log(bar);

// 생성자 파라미터
const User2 = function(id, email) {
    this._id = id;
    this._email = email;
};

const foo = new User2("hello", "hello@javascrit.com");
const bar = new User2("world", "world@javascrit.com");

console.log(foo);
console.log(bar); */

//메서드
const User3 = function(id, email) {
    this._id = id;
    this._email = email;
};

User3.prototype.login = function() {
    console.log("로그인 되었습니다. -> id=" + this._id + ", email=" + this._email);
};

User3.prototype.logout = function() {
    console.log("로그아웃 되었습니다. -> id=" + this._id + ", email=" + this._email);
};

const student = new User3('학생', 'stud@gmail.com');


student.login();
student.logout();


const teacher = new User3('강사', 'teac@gmail.com');

teacher.login();
teacher.logout();

teacher._id = '선생님';
teacher._email = 'teacher@naver.com';
teacher.login();
teacher.logout();
