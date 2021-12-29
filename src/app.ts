class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log('Number of employees: ',this.employees.length);
        console.log('Employees list', this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Adam');
accounting.addEmployee('Bassant');

accounting.describe();
accounting.printEmployeeInformation();
