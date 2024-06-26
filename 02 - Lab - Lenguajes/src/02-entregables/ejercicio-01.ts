console.log("************** DELIVERABLE 01 **************");
console.log("** 1. Array operations **");

const myArray = ['one', 'two', 'three', 'four'];

// HEAD
const head = ([first]: string[]): string => {
	return first;
};
console.log(`HEAD: ${head(myArray)}`);

// TAIL
const tail = ([, ...rest]: string[]): string[] => {
	return [...rest];
};
console.log(`TAIL: ${tail(myArray)}`);

// INIT
const init  = (array: string[]): string[] => {
	const auxArray = [...array];
	auxArray.pop();
	return auxArray;
};
console.log(`INIT: ${init(myArray)}`);

// LAST
const last  = (array: string[]): string => {
	const auxArray = [...array];
	return auxArray.pop();
};
console.log(`LAST: ${last(myArray)}`);

// ARRAY INMUTABLE
console.log(`ORIGINAL ARRAY: ${myArray}`);