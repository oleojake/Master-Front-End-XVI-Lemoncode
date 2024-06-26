console.log("************** DELIVERABLE 03 **************");
console.log("** 3. Clone Merge **");

const original = { name: "Maria", surname: "Ibañez", country: "SPA" }

function clone(source) {
  return {...source}
}

const cloned = clone(original);
console.log("ORIGINAL:");
console.log(original);
console.log("CLONED: ");
console.log(cloned);


function merge(source, target) {
	return {...clone(target), ...clone(source)}
}

// Por ejemplo, dados estos 2 objetos:
let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
const merged = merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log("SOURCE:");
console.log(a);
console.log("TARGET:");
console.log(b);
console.log("MERGED:");
console.log(merged);