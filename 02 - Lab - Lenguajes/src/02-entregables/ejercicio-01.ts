console.log("************** DELIVERABLE 01 **************");
console.log("** 1. Array operations **");

const myArray = ['one', 'two', 'three', 'four'];

// HEAD
const head = <T>([first]: T[]): T => {
	return first;
};
console.log(`HEAD: ${head(myArray)}`);

// TAIL
const tail = <T>([, ...rest]: T[]): T[] => {
	return [...rest];
};
console.log(`TAIL: ${tail(myArray)}`);

// INIT
const init  = <T>(array: T[]): T[] => {
	return array.slice(0, -1);
};
console.log(`INIT: ${init(myArray)}`);

// LAST
const last  = <T>(array: T[]): T => {
	return array[array.length - 1];
};
console.log(`LAST: ${last(myArray)}`);

// ARRAY INMUTABLE
console.log(`ORIGINAL ARRAY: ${myArray}`);