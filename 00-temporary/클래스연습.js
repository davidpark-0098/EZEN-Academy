"use strict";

// 클래스 변수 정의
class MemberClass {
    userName = null;
    email = null;
}

const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

m1.userName = "민혁";
m1.email = "mh@gmail.com";

m2.userName = "철수";
m2.email = "cs@gmail.com";

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);

// json과 차이점
const m3 = {
    userName: "철민",
    email: 'chulmin@naver.com'
};

const m4 = m3;

console.log(m3);
console.log(m4);

m3.userName = "민수";
m3.email = "ms@gmail.com";

console.log(m3);
console.log(m4);

// 메서드만 정의한 클래스
class Calc {
    plus(x, y) {
        return x + y;
    }
    minus(x, y) {
        return x - y;
    }
}

const c = new Calc();
console.log(c.plus(1,2));
console.log(c.minus(10,5));

// 멤버변수와 메서드를 갖는 클래스
class HelloWorld {
    message = null;

    sayHello() {
        console.log(this.message);
    }
    setEng() {
        this.message = "Hello JavaScript";
    }
    setKor() {
        this.message = "안녕하세요. 자바스크립트";
    }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();

// 생성자
class MyUnit {
    name;
    speed;
    dps;

    constructor(name, speed, dps) {
        this.name = name;
        this.speed = speed;
        this.dps = dps;
        console.log(`>>> 생성자를 통한 ${this.name} 객체 초기화 완료 (speed=${this.speed}, dps=${this.dps})`);
    }

    move(where) {
        console.log(`${this.name}(이)가 ${where}(으)로 ${this.speed}의 속력으로 이동합니다.`);
    }
    attack(target) {
        console.log(`${this.name}(이)가 ${target}에게 초당 ${this.dps}의 데미지를 입힙니다.`);
    }
}

const marin = new MyUnit("Knight", 5, 10);
marin.move('던전');
marin.attack('골램');

const team = [
    new MyUnit("Knight", 5, 10),
    new MyUnit("Healer", 15, 1),
    new MyUnit("Cleric", 7, 20)
];

for (const t of team) {
    t.move("던전");
    t.attack("보스");
}

// getter setter
class UserClass {
    #userName;
    #email;

    constructor(userName, email) {
        this.#userName = userName;
        this.#email = email;
    }

    set userName(value) {
        if (!value) {
            console.log("userName을 입력하세요.");
            return;
        }

        this.#userName = value;
    }
    get userName() {
        return this.#userName;
    }

    set email(value) {
        if(!value) {
            console.log("email을 입력하세요.");
            return;
        }
        this.#email = value;
    }
    get email() {
        return this.#email;
    }

    login() {
        if(!this.userName || !this.email) {
            console.log("userName이나 email을 출력하세요.");
            return;
        }
        
        console.log(`로그인 되었습니다. >> userName = ${this.userName}, email = ${this.email}`);
    }
}

const user = new UserClass("Lee", "lee@naver.com");
user.login();

user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email = "hello@gmail.com";
user.login();

// 상속 기능확장
class SayHello {
    eng() {
        console.log("Hello Javascript");
    }
}

class SayHelloWorld extends SayHello {
    kor() {
        console.log("안녕하세요 자바스크립트!");
    }
}

const say = new SayHelloWorld();
say.eng();
say.kor();

// 상속 공통기능추출
class Protoss {
    #name;
    #hp;
    #dps;

    constructor(name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log(`${this.name}, ${this.hp}, ${this.dps}`);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }

    get dps() {
        return this.#hp;
    }
    set dps(value) {
        this.#dps = value;
    }

    move(position) {
        console.log(this.name + "이가" + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "이가" + target + "을 공격합니다. 데미지: " + this.#dps);
    }
}

class zealot extends Protoss {
    sword(target) {
        this.attack(target);
        console.log(">>>>>>검으로 찌르기");
    }
}

class Dragoon extends Protoss {
    fire(target) {
        this.attack(target);
        console.log(">>>>>>>>>원거리 공격");
    }
}

var z1 = new zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

var z2 = new zealot("질럿2", 300, 25);
z2.move("멀티");
z2.sword("멀티");

var d1 = new zealot("드라군1", 300, 40);
d1.move("본진");
d1.sword("본진");

var d2 = new zealot("드라군2", 440, 35);
d2.move("멀티");
d2.sword("멀티");

//  오버라이드
class Terran {
    #name;
    #hp;
    #dps;

    constructor(name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log(`${this.name}, ${this.hp}, ${this.dps}`);
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }
    set hp(value) {
        this.#hp = value;
    }

    get dps() {
        return this.#dps;
    }
    set dps(value) {
        this.#dps = value;
    }

    move(position) {
        console.log(this.name + "이가" + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "이가" + target + "을 공격합니다. 데미지: " + this.dps);
    }
}

class Marine extends Terran {
        attack(target) {
        console.log(this.name + "이가" + target + "에게 사격을 개시합니다. 데미지:" + this.dps);
    }
}

class Tank extends Terran {
    attack(target) {
        super.attack(target);
        console.log(">>>>>>>>>탱크포격");
    }
}

class Firebat extends Terran {

    constructor(name) {
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
m.attack("질럿");

const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebat('화염방사병');
f.attack("적");

// 정적멤버변수
class Customer {
    #name;

    static count = 0;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    in() {
        Customer.count++;
    }
    out() {
        Customer.count--;
    }
    showState() {
        console.log(`손님의 이름:${this.name}, 전체 손님 수:${Customer.count}`);
    }
}

const c1 = new Customer("손님1");
c1.in();
c1.showState();

const c2 = new Customer("손님2");
c2.in();
c1.showState();
c2.showState();

const c3 = new Customer("손님3");
c3.in();
c1.showState();
c2.showState();
c3.showState();

const c4 = new Customer("손님2,3 out");
c3.out();
c2.out();
c1.showState();
c2.showState();
c3.showState();

// 싱글톤패턴
class Calc {
    static #current = null;

    static getInstance() {
        if (Calc.#current === null) {
            Calc.#current = new Calc();
        }
        return Calc.#current;
    }

    plus(x, y) {
        return x + y;
    }
    minus(x, y) {
        return x - y;
    }
    times(x, y) {
        return x * y;
    }
    div(x, y) {
        return x/y;
    }
}

c1 = Calc.getInstance();
console.log(c1.plus(10,20));

c2 = Calc.getInstance();
console.log(c2.plus(10,20));

console.log(Calc.getInstance().times(10, 20));
console.log(Calc.getInstance().div(10, 20));