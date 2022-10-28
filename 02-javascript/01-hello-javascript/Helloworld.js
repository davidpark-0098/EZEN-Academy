"use strict";

console.group("MyMessage1");
    console.log("안녕하세요. Javascript1");
    console.log("안녕하세요. Javascript2");
    console.log("안녕하세요. Javascript3");
console.groupEnd();

console.group("MyMessage2");
    console.log("안녕하세요.. Javascript4");

        console.group("MyMessage2-1");
        console.log("안녕하세요. Javascript5");
        console.log("안녕하세요. Javascript6");
    console.groupEnd();
console.groupEnd();