const MyModule4 = require("./MyModule4");

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
    return x / y;
  }
}

module.exports = Calc.getInstance();
