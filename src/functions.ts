//function return type
/*function add(n1: number, n2: number): number {
    return n1 + n2;
}*/

const add2 = (n1: number, n2: number) : number => {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ', num);
}

printResult(add2(5, 12));

//functions as types
let combineValues: (a: number, b: number) => number;

combineValues = add2;

console.log(combineValues(8, 8));

//function as callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (num) => {
    console.log('The result is: ', num)
})