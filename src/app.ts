class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log('Number of employees: ',this.employees.length);
        console.log('Employees list', this.employees);
    }
}

//inheritance
class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

//accounting
const accounting = new Department('d1', 'Accounting');
console.log('%c Accounting department', 'color: red; font-size: 20px;', accounting);

accounting.addEmployee('Adam');
accounting.addEmployee('Bassant');

accounting.describe();
accounting.printEmployeeInformation();

//IT
const it = new ITDepartment('d2', ['Adam', 'Regina']);
console.log('%c IT department', 'color: red; font-size: 20px;', it);

it.addEmployee('Adam');
it.addEmployee('Bassant');

it.describe();
it.printEmployeeInformation();