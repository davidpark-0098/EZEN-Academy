"use strict";


let input = prompt("값을 입력하세요.")
// alert(input);

//let input = 10;
let star = '';
for (let a=0; a<(input*2-1); a++) {
    if (a < input) {
            for (let b=0; b<=a; b++) {
                star += '*';
            }
        star += '\n';
    } else {
        for (let b=input*2-1; b>a; b--) {
            star += '*';
        }
    star += '\n';
        
    }
}
console.log(star);