import { BadRequestException } from "./ExceptionHelper.js";

class RegexHelper {
    static #current = null;

    static getInstance() {
        if (RegexHelper.#current === null) {
            RegexHelper.#current = new RegexHelper();
        }

        return RegexHelper.#current;
    }

    /**
     * 
     * @param {string} content 
     * @param {string} msg 
     * @returns 
     */
    value(content, msg) {
        if (content == undefined || content == null || (typeof content == 'string' && content.trim().length === 0)) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 
     * @param {string} content  
     * @param {int} len 
     * @param {string} msg 
     * @returns 
     */
    maxLength(content, len, msg) {
        if (!this.value(content) || content.length > len) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 
     * @param {string} content 
     * @param {int} len 
     * @param {string} msg 
     * @returns 
     */
    minLength(content, len, msg) {
        if (!this.value(content) || content.length < len) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 
     * @param {string} origin 
     * @param {string} compare 
     * @param {string} msg 
     * @returns 
     */
    compareTo(origin, compare, msg) {
        var src = origin.trim();
        var dsc = compare.trim();

        if (src != dsc) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 
     * @param {string} content  
     * @param {string} contentmsg 
     * @param {object} regexExpr 
     * @returns 
     */
    field(content, msg, regexExpr) {
        const src = typeof content == 'string' ? content.trim() : content;

        if (!src || !regexExpr.text(src)) {
            throw new BadRequestException(msg);
        }

        return true;
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    num(content, msg) {
        return this.field(content, msg, /^[0-9]*$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    eng(content, msg) {
        return this.field(content, msg, /^[a-zA-Z]*$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    kor(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣]*$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    engNum(content, msg) {
        return this.field(content, msg, /^[a-zA-Z0-9]*$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    korNum(content, msg) {
        return this.field(content, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    email(content, msg) {
        return this.field(content, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    cellphone(content, msg) {
        return this.field(content, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    telphone(content, msg) {
        return this.field(content, msg, /^\d{2,3}\d{3,4}\d{4}$/);
    }

    /**
     * 
     * @param {string} content  
     * @param {string} msg 
     * @returns 
     */
    phone(content, msg) {
        var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
        var check2 = /^\d{2,3}\d{3,4}\d{4}$/;

        var src = content.trim();

        if (!src || (!check1.test(src) && !check2.text(src))) {
            throw new BadRequestException(msg);
        }
        return true;
    }
}

export default RegexHelper;