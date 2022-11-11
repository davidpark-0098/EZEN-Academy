/**
 * @ File Name: common.js
 * @ Author: david park (daxxx2030@gail.com)
 * @ Last Update: 2022-09-23 19:33:00
 * @ Description: common
 */
"use strict";

import RegexHelper from "../helper/RegexHelper.js";

class click {
    // form submit button
    send() {
        document.querySelector('#invite').addEventListener('submit', e => {
            e.preventDefault();

            const regexHelper = RegexHelper.getInstance();
            // 이름 입력, 2글자 이상 예외처리
            try {
                regexHelper.value(document.querySelector('#name'), 'Please enter your name.');
                regexHelper.minLength(document.querySelector('#name'), 2, 'Please enter two or more characters');
            } catch (e) {
                alert(e.message);
                console.error(e);
                e.selector.focus();
                return;
            }
            // 팝업 닫기
            const a = document.querySelector('#popup')
            a.style.display = "none";
            // 완료 메시지
            alert('We are waiting for you.');
            // input name 입력값 초기화
            document.querySelector('#name').value = "";
        });
    }
    // form close button
    out() {
        document.querySelector('#out').addEventListener('click', e => {
        // 팝업 닫기
        const a = document.querySelector('#popup')
        a.style.display = "none";
        // input name 입력값 초기화
        document.querySelector('#name').value = "";
        });
    }
    // form open button
    rsvp() {
        document.querySelector('#RSVP').addEventListener("click", e => {
        e.preventDefault();
        // 팝업 열기
        const a = document.querySelector('#popup')
        a.style.display = "block";
        });
    }
}

export default new click();