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