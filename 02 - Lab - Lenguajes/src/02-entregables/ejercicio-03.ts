console.log("************** DELIVERABLE 03 **************");
console.log("** 3. Clone Merge **");

const original = { name: "Maria", surname: "Ibañez", country: "SPA" }

const clone = <T>(source: T): T => {
	return { ...source }
}

const cloned = clone(original);
console.log("ORIGINAL:");
console.log(original);
console.log("CLONED: ");
console.log(cloned);
console.log("ORIGINAL === CLONED: ", original === cloned);


const merge = <T, U>(source: T, target: U): T & U => {
	return { ...clone(target), ...clone(source) }
}

// Por ejemplo, dados estos 2 objetos:
let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
const merged = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log("**Opcional:");
console.log("MERGED:");
console.log(merged);
console.log("SOURCE:");
console.log(a);
console.log("TARGET:");
console.log(b);