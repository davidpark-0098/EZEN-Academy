"use strict";

// MyModule1
var my1 = require('./MyModule1');
my1();

// MyModule2
var my2 = require('./MyModule2');
console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);

my2.say();

console.log(my2.home.postcode);
console.log(my2.home.address);
my2.home.getAddress();

// MyModule3
var my3 = require('./MyModule3');

var module_obj = new my3();
module_obj.say();

// MyModule4
var my4 = require('./MyModule4');
my4.say();