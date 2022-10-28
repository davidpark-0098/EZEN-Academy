class BadRequestException extends Error {
    
    #statusCode;

    constructor(msg = '잘못된 요청 입니다.') {
        super(msg);
        super.name = 'BadRequestException';
        this.#statusCode = 400;
    }

    get statusCode() {
        return this.#statusCode;
    }
}

export { BadRequestException };