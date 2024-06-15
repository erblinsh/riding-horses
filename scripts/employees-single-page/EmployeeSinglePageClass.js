import { Employee } from "../employees/EmployeeClass.js";
import { createElement } from "../helpers/createElement.js"

export class EmployeeSinglePageClass extends Employee{
    constructor(employee) {
        super(employee)
    }


    createEmployeeLink(href="page-not-found", textContent="Learn more") {
        return createElement('a', {href: `${href}.html`}, textContent)
    }
    
    createContainer() {
        return createElement('div', {className: "other-employees-card"})
    }

    employeeCardBgImage(container) {
        container.style.background = `linear-gradient(#11111173,#11111173), url('${this.employee.image}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center"
    }

    async createEmployeeCard(location = document.body, employeeDetailHref) {
        const container = this.createContainer();
        this.employeeCardBgImage(container)
        
        container.append(this.createEmployeeTitle(), this.createEmployeeLink(employeeDetailHref));

        location.appendChild(container)
    }
}