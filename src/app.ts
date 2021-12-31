interface Person {
    name: string;
    age: number;
    greet: (phrase: string) => void;
}

let user1: Person;

user1 = {
    name: 'Adam',
    age: 30,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}

user1.greet("Hi there, I'm ");

//interfaces with classes
interface Greetable {
    readonly name: string;
    greet: (phrase: string) => void;
}

class Person2 implements Greetable {
    constructor(public name: string) {
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

let user2: Greetable;
user2 = new Person2('Adam');

user2.greet('Welcome');
// user2.name = 'Yellow';
user2.greet('Welcome');