/*type User = {
    name: string,
    age: number
};

const person: User = {
    name: 'Adam',
    age: 30,
};

console.log(person.name);*/

//tuples
let role: [number, string] = [2, 'author'],
    //arrays
    arr1: string[] = [],
    arr2: (string | number)[] = [];

role.push('mango');
arr1.push('text');
arr2.push('el',2);

console.log(role);
console.log(arr1);
console.log(arr2);

//enum
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Adam',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if(person.role === Role.ADMIN) {
    console.log('Is admin');
}

//union types
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    if(typeof input1 === 'number' && typeof input2 === "number" || resultConversion === 'as-number') {
        return +input1 + +input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

const combinedAges = combine(30, 26, 'as-number');
console.log('combinedAges: ', combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log('combinedStringAges: ', combinedStringAges);

const combinedNames = combine('Adam', 'Bassant', "as-text");
console.log('combinedNames:', combinedNames);