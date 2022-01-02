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

/*const pers = new Person();

console.log(pers);*/

/************** decorator factories ***************/
//example1
const Logger2 = (logString: string) => (constructor: Function) => {
    console.log('Logger2');
    console.log(logString);
    console.log(constructor);
}

//example2
const withTemplate = (template: string, hookId: string) => (_: Function) => {
    const element = document.getElementById(hookId);
    console.log('Rendering template');

    if(element) {
        element.innerHTML = template;
    }
}

@Logger2('LOGGING - PERSON')
@withTemplate('<h1>My person object</h1>', 'app')
class AnotherPerson {
    name = 'Adam2';

    constructor() {
        console.log('Createing person object...');
    }
}