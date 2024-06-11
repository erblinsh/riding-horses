import { EmployeeSinglePageClass } from './EmployeeSinglePageClass.js';

export class RelatedEmployees {
    constructor(employees, container) {
        this.employees = employees;
        this.container = container;
        this.randomNumbers = new Set();
        this.relatedEmployees = new Set();
    }

    getARandomEmployee() {
        const nrOfEmployees = this.employees.length;
        const randomIntegerInRange = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
        
        let randomNumber;
        
        if (this.randomNumbers.size === nrOfEmployees) {
            return null;
        }

        do {
            randomNumber = randomIntegerInRange(0, nrOfEmployees - 1);
        } while (this.randomNumbers.has(randomNumber));

        this.randomNumbers.add(randomNumber);
        return this.employees[randomNumber];
    }
    
    async createOneEmployeeCard(employeeData) {
        if (!this.relatedEmployees.has(employeeData)) {
            const employee = new EmployeeSinglePageClass(employeeData);
            await employee.createEmployeeCard(this.container, employee.employee.id);
            this.relatedEmployees.add(employeeData);
        }
    }

    async createRelatedEmployeesCards(nrOfEmployees) {
        let relatedEmployees = [];

        while (relatedEmployees.length < nrOfEmployees) {
            const randomEmployee = this.getARandomEmployee();

            if (randomEmployee && !relatedEmployees.includes(randomEmployee)) {
                relatedEmployees.push(randomEmployee);
            }
        }

        for (const employee of relatedEmployees) {
            await this.createOneEmployeeCard(employee);
        }
    }
}