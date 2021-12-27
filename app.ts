type User = {
    name: string,
    age: number
};

const person: User = {
    name: 'Adam',
    age: 30,
};

let role: [number, string] = [2, 'author'],
    arr1: string[],
    arr2: (string | number)[];

arr1.push('text')
arr2.push('el',2);

role.push('mango')

console.log(person.name);