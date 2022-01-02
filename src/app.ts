/************** build in generics ***************/
const names: Array<string> = ['Max', 'Adam'];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done.');
    }, 2000);
});

promise.then((data) => {
    console.log(data.split(' '))
});

/************** custom generics ***************/
//example1
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const mergedObj = merge({name: 'Max'}, {age: 30});

console.log(mergedObj.name);

//example2
const updateObject = <T extends object, U extends object>(oldObject: T, UpdatedValues: U) => ({
    ...oldObject,
    ...UpdatedValues,
});

const initialState = {
    show: false,
    name: 'Adam'
};

console.log(updateObject(initialState, {show: true}));

//example3
interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if(element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(('Hi there!')));
console.log(countAndDescribe((['Sports', 'Cooking'])));
