/**객체를 모듈화 하기 */
class HelloWorld {
  constructor() {
    console.log("--- HelloWorld의 객체가 생성되었습니다. ---");
  }

  say() {
    console.log("Hello World");
  }
}

module.exports = new HelloWorld();
