class Department {
    protected employees: string[] = [];

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

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(employee: string) {
        if(employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    printReports() {
        console.log('Reports list: ', this.reports);
    }
}

//IT
const it = new ITDepartment('d1', ['Adam', 'Regina']);
console.log('%c IT department', 'color: red; font-size: 20px;', it);

it.addEmployee('Adam');
it.addEmployee('Bassant');

it.describe();
it.printEmployeeInformation();

//accounting
const accounting = new AccountingDepartment('d2', []);
console.log('%c Accounting department', 'color: red; font-size: 20px;', accounting);

accounting.addEmployee('Maxim');
accounting.addEmployee('Vasilis');
accounting.addReport('Something went wrong');
accounting.printReports();

accounting.describe();
accounting.printEmployeeInformation();