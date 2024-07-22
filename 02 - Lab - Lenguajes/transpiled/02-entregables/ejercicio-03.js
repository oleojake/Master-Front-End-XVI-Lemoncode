var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("************** DELIVERABLE 03 **************");
console.log("** 3. Clone Merge **");
var original = { name: "Maria", surname: "Ibañez", country: "SPA" };
var clone = function (source) {
    return __assign({}, source);
};
var cloned = clone(original);
console.log("ORIGINAL:");
console.log(original);
console.log("CLONED: ");
console.log(cloned);
console.log("ORIGINAL === CLONED: ", original === cloned);
var merge = function (source, target) {
    return __assign(__assign({}, clone(target)), clone(source));
};
// Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
// El resultado de mezclar a sobre b sería:
var merged = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log("**Opcional:");
console.log("MERGED:");
console.log(merged);
console.log("SOURCE:");
console.log(a);
console.log("TARGET:");
console.log(b);
