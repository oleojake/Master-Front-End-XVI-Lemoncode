var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 **************");
console.log("** 2. Concat **");
var myArray1 = ["one", "two"];
var myArray2 = ["three", "four"];
var myArray3 = ["five", "six"];
var concat = function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); };
console.log("CONCAT ARRAY: ".concat(concat(myArray1, myArray2)));
console.log("ORIGINAL ARRAY 1: ".concat(myArray1));
console.log("ORIGINAL ARRAY 2: ".concat(myArray2));
var concatMulti = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, curr) { return __spreadArray(__spreadArray([], acc, true), curr, true); }, []);
};
console.log("**Opcional**");
console.log("MULTIPLE CONCAT ARRAY: ".concat(concatMulti(myArray1, myArray2, myArray3)));
console.log("ORIGINAL ARRAY 1: ".concat(myArray1));
console.log("ORIGINAL ARRAY 2: ".concat(myArray2));
console.log("ORIGINAL ARRAY 3: ".concat(myArray3));
