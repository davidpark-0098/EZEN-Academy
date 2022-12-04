"use strict";

let input = '5';
let star = "";
for(let i=0; i<(input*2-1); i++) {
    if (i < input){
        for(let j=input; j>i; j--) {
            star += ' ';

        }
        for(let g=4; g>=(i*2); g++) {
            star += '*';

        }
        star += '\n';
        
    } else {

        for(let j=9; j<(i); j++) {
            star += ' ';

        }
        for(let g=37; g>(i*2); g--) {
            star += '*';

        }
        star += '\n';
    }
}
console.log(star);