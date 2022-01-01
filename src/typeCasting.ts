type Admin = {
    name: string,
    privileges: string[],
};

type Employee = {
    name: string,
    startDate: Date,
}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Adam',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Generic =  string | number;
type Numeric = number | boolean;

type Universal = Generic & Numeric;

const n1: Universal = 3;

/****************** discriminated unions ******************/
 interface Bird {
    type: 'bird',
    flyingSpeed: number,
}

interface Horse {
    type: 'horse',
    runningSpeed: number,
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            console.log('Not an animal');
    }
    console.log(`Moving at speed ${speed}`);
}

moveAnimal({type: "bird", flyingSpeed: 50});

/****************** type casting ******************/
/*//original syntax
const userInputElement = <HTMLInputElement>document.getElementById('user-input');*/
//newer syntax
const userInputElement = document.getElementById('user-input') as HTMLInputElement;;

userInputElement.value = 'Hi there!';

/****************** index properties ******************/
interface ErrorContainer {
    [prop: string]: string,
}

const errors: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character',
};