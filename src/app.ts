/************** decorators ***************/
import construct = Reflect.construct;

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
//example1 (class decorator)
const Logger2 = (logString: string) => (constructor: Function) => {
    console.log('Logger2');
    console.log(logString);
    console.log(constructor);
}

//example2 (class decorator)
const withTemplate = (template: string, hookId: string) => <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) => {
    return class extends originalConstructor {
        constructor(..._: any[]) {
            super();
            const element = document.getElementById(hookId);
            console.log('Rendering template');

            console.log(`This is the name property of the class assigned to withTemplate decorator ${this.name}`);
            if (element) {
                element.innerHTML = template;
            }
        }
    }
}

@Logger2('LOGGING - PERSON')
@withTemplate('<h1>My person object</h1>', 'app')
class AnotherPerson {
    name = 'Adam2';

    constructor() {
        console.log('Creating person object...');
    }
}

const anotherPerson = new AnotherPerson();

//example3 (property decorator)
const Log = (target: any, propertyName: string) => {
    console.log('%c Property decorator!', 'color: red; font-size: 20px;');
    console.log(target);
    console.log(propertyName);
}

//example4 (accessor decorator)
const Log2 = (target: any, accessorName: string, descriptor: PropertyDescriptor) => {
    console.log('%c Accessor decorator!', 'color: red; font-size: 20px;');
    console.log(target);
    console.log(accessorName);
    console.log(descriptor);
}

//example5 (method decorator)
const Log3 = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    console.log('%c Method decorator!', 'color: red; font-size: 20px;');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}

//example6 (parameter decorator)
const Log4 = (target: any, methodName: string | Symbol, parameterPosition: number) => {
    console.log('%c Parameter decorator!', 'color: red; font-size: 20px;');
    console.log(target);
    console.log(methodName);
    console.log(parameterPosition);
}

class Product {
    //property decorator example
    @Log
    title: string;

    constructor(t: string, private _price: number) {
        this.title = t;
    }

    //accessor decorator example
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;

        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

//auto bind decorator
const autoBind = (_1: any, _2: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value,
        adjDescriptor: PropertyDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                return originalMethod.bind(this);
            }
        }
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @autoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();
const button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', p.showMessage)