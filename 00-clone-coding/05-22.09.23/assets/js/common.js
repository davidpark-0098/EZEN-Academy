/**
 * @ File Name: common.js
 * @ Author: david park (daxxx2030@gail.com)
 * @ Last Update: 2022-10-01 18:33:00
 * @ Description: 주석
 */
"use strict";

import RegexHelper from "../helper/RegexHelper.js";

class click {
    // 메뉴 열기
    open() {
        document.querySelector('#nav_open').addEventListener('click', e => {
            e.preventDefault();

            document.querySelector('#nav_bg').style.display = 'block';
            document.querySelector('#nav_aside').style.left = '0';
        });
    }

    // 메뉴 닫기
    close() {
        document.querySelector('#nav_close').addEventListener('click', e => {
            e.preventDefault();

            document.querySelector('#nav_bg').style.display = 'none';
            document.querySelector('#nav_aside').style.left = '-300px';
        });
    }

    // 제출 양식 예외처리
    send() {
        document.querySelector('#form').addEventListener('submit', e => {
            e.preventDefault();

            const regexHelper = RegexHelper.getInstance();
            // 예외처리 조건
            try {
                regexHelper.value(document.querySelector('#name'), 'Please enter your name.');
                regexHelper.minLength(document.querySelector('#name'), 2, 'Please enter two or more characters');
                regexHelper.value(document.querySelector('#email'), 'Please enter your email.');
            } catch (e) {
                alert(e.message);
                console.error(e);
                e.selector.focus();
                return;
            }
            // 완료 메시지
            alert('Success!');
            // input 입력값 초기화
            document.querySelector('#name').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#message').value = "";
        });
    }
}

export default new click();