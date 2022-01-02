/************** decorators ***************/
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

/************** decorator factories ***************/
const Logger2 = (logString: string) => (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
}

@Logger2('LOGGING - PERSON')
class AnotherPerson {
    name = 'Adam2';

    constructor() {
        console.log('Createing person object...');
    }
}