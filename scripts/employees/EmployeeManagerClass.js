import { createElement } from '../helpers/createElement.js';
import { Employee } from './EmployeeClass.js';
import { getApi } from '../api/getApi.js'; 

export class EmployeeManager {
    constructor(employees, employeesContainer, next, currentPage) {
        this.employees = employees;
        this.employeesContainer = employeesContainer || document.body;
        this.next = next !== undefined ? next : true;
        this.currentPage = currentPage; 
        this.perPage = 4; 
        this.loadButton = null;
        this.buttonContainer = createElement('div', {className: 'load-more'});
        this.createEmployeesCards();
        this.setupLoadMoreButton();
    }

    getOneEmployee(id) {
        return this.employees.find(e => e.id === id);
    }

    async createOneEmployeeCard(id) {
        const employeeData = this.getOneEmployee(id);

        if (employeeData) {
            const employee = new Employee(employeeData);
            await employee.createEmployeeCard(this.employeesContainer);
        } else {
            console.error(`Employee with id ${id} not found!`);
        }
    }

    createLoadMoreButton() {
        return createElement('button', { className: "load-more-btn" }, "Load More");
    }

    setupLoadMoreButton() {
        if (this.next) {
            this.loadButton = this.createLoadMoreButton();
            this.loadButton.addEventListener('click', () => this.loadMoreCards());
            this.buttonContainer.appendChild(this.loadButton); // Corrected this line
            this.employeesContainer.appendChild(this.buttonContainer);
        }
    }

    async loadMoreCards() {
        if (this.loadButton) {
            this.loadButton.disabled = true;

            try {
                this.currentPage++;
                const newEmployees = await getApi(`employees?_page=${this.currentPage}&_per_page=${this.perPage}`);
                this.employees = this.employees.concat(newEmployees.data); 
                newEmployees.data.forEach(e => this.createOneEmployeeCard(e.id)); 

                if (!newEmployees.next) { 
                    this.loadButton.style.display = 'none';
                    this.buttonContainer.style.display = 'none';
                } else {
                    this.buttonContainer.appendChild(this.loadButton);
                    this.employeesContainer.appendChild(this.buttonContainer);
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.loadButton.disabled = false;
            }
        }
    }

    createEmployeesCards() {
        this.employees.forEach(e => this.createOneEmployeeCard(e.id));
    }
}