/** MyModule1 */
console.group('\nMyModule1');
// require() 함수는 module.exports를 통해서 등록된 기능들을 리턴한다.
// 리턴받는 my객체는 module.exports에 확장된 기능들을 참조한다.
// 파일 경로를 명시할 때 확장자 생략 가능하다.
// 하지만 동일 경로라 하더라도 "./"는 생략불가하다.
// "./"가 생략되는 경우 node의 내장 모듈로 인식한다.
const my1 = require('./MyModule1');

// 모듈형태로 참조된 함수를 호출한다.
my1();
console.groupEnd();

/** MyModule2 */
console.group('\nMyModule2');
// 모듈을 통해서 참조된 객체는 MyModule2의 모든 기능을 내장한 객체가 된다.
var my2 = require('./MyModule2');

console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);

my2.say();

console.log(my2.home.postcode);
console.log(my2.home.address);
my2.home.getAddress();
console.groupEnd();

/** MyModule3 */
console.group('\nMyModule3');
// 클래스 형태의 모듈 참조
var my3 = require('./MyModule3');

// 리턴된 모듈은 클래스 형태이므로, 기능의 사용을 위해서는 인스턴스를 생성해야 한다.
var module_obj = new my3();
module_obj.say();
console.groupEnd();

/** MyModule4 */
console.group('\nMyModule4');
// 객체 형태의 모듈 참조
var my4 = require('./MyModule4');

// 리턴된 모듈은 객체 형태이므로, 직접 모듈 내의 기능을 호출할 수 있다.
my4.say();
console.groupEnd();

/** MyModule5 */
console.group('\nMyModule5');

// 싱글톤 객체 참조
const my5 = require('./MyModule5');

console.log(`100 + 30 = ${my5.plus(100, 30)}`);
console.log(`100 + 30 = ${my5.minus(100, 30)}`);
console.log(`100 + 30 = ${my5.times(100, 30)}`);
console.log(`100 + 30 = ${my5.div(100, 30)}`);
console.groupEnd();