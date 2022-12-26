/**
 * @FileName : UtilHelper.js
 * @Description : 백엔드 개발시 자주 사용되는 독립 함수들 모음
 * @Author : EZEN 아카데미 Node.js 강의
 */

const { networkInterfaces } = require("os");

class UtilHelper {
  static #current = null;

  static getInstance() {
    if (UtilHelper.#current === null) {
      UtilHelper.#current = new UtilHelper();
    }

    return UtilHelper.#current;
  }

  myif() {
    const ipAddress = [];
    const nets = networkInterfaces();

    for (const attr in nets) {
      const item = nets[attr];

      item.map((v, i) => {
        if ((v.family == "IPv4" || v.family == 4) && v.address != "127.0.0.1") {
          ipAddress.push(v.address);
        }
      });
    }

    return ipAddress;
  }
  urlFormat(urlObject) {
    return String(Object.assign(new URL("http://a.com"), urlObject));
  }
}

module.exports = UtilHelper.getInstance();
