var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 01 **************");
console.log("** 1. Array operations **");
var myArray = ['one', 'two', 'three', 'four'];
// HEAD
var head = function (_a) {
    var first = _a[0];
    return first;
};
console.log("HEAD: ".concat(head(myArray)));
// TAIL
var tail = function (_a) {
    var rest = _a.slice(1);
    return __spreadArray([], rest, true);
};
console.log("TAIL: ".concat(tail(myArray)));
// INIT
var init = function (array) {
    return array.slice(0, -1);
};
console.log("INIT: ".concat(init(myArray)));
// LAST
var last = function (array) {
    return array[array.length - 1];
};
console.log("LAST: ".concat(last(myArray)));
// ARRAY INMUTABLE
console.log("ORIGINAL ARRAY: ".concat(myArray));
