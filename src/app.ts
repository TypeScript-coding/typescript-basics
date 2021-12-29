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

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Adam');
accounting.addEmployee('Bassant');

accounting.describe();
accounting.printEmployeeInformation();
