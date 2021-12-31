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

interface Named {
    readonly name: string;
}

interface Greetable extends Named{
    greet: (phrase: string) => void;
}

//interfaces with classes
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
//you cannot do the following because name is set to readonly
// user2.name = 'Yellow';
user2.greet('Welcome');