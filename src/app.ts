function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Adam';

    constructor() {
        console.log('Createing person object...');
    }
}

const pers = new Person();

console.log(pers);