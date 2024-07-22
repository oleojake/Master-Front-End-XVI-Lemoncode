console.log("************** DELIVERABLE 02 **************");
console.log("** 2. Concat **");

const myArray1 = ["one", "two"];
const myArray2 = ["three", "four"];
const myArray3 = ["five", "six"];

const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];
console.log(`CONCAT ARRAY: ${concat(myArray1, myArray2)}`);
console.log(`ORIGINAL ARRAY 1: ${myArray1}`);
console.log(`ORIGINAL ARRAY 2: ${myArray2}`);

const concatMulti = <T>(...args: T[][]): T[] => args.reduce((acc, curr) => [...acc, ...curr], []);
console.log(`**Opcional**`);
console.log(`MULTIPLE CONCAT ARRAY: ${concatMulti(myArray1, myArray2, myArray3)}`);
console.log(`ORIGINAL ARRAY 1: ${myArray1}`);
console.log(`ORIGINAL ARRAY 2: ${myArray2}`);
console.log(`ORIGINAL ARRAY 3: ${myArray3}`);
