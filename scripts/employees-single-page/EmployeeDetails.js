import { getApi } from "../api/getApi.js";
import { createElement } from "../helpers/createElement.js";


export class EmployeeDetails {
    constructor(employeeContainer, employeeId) {
        this.employeeContainer = employeeContainer;
        this.employeeId = employeeId;
        this.employee = false;
        this.getEmployee().then(() => {
            this.createEmployeeDetails();
        });
    }

    async getEmployee() {
        this.employee = await getApi(`employees/${this.employeeId}`)
    }

    createEmployeeImg() {
        return createElement('img', { src: this.employee.image, alt: this.employee.name})
    }

    createEmployeeRole() {
        const employeeRole = createElement('h5', {})
        const employeeRoleItalic = createElement('i', {}, this.employee.role)

        employeeRole.appendChild(employeeRoleItalic)
        return employeeRole
    }

    createEmployeeDetailsHeader() {
        const container = createElement('div', {className: "employee-details-header"})
        container.appendChild(this.createEmployeeImg())
    
        return container
    }

    createEmployeeDetailsDescription() {
        const container = createElement('div', {className: "employee-details-description"})
        const employeeName = createElement('h2', {}, this.employee.name)
        const employeeRole = this.createEmployeeRole()
        const employeeDescription = createElement('p', {}, this.employee.description)

        container.append(employeeName, employeeRole, employeeDescription)
        return container
    }

    createEmployeeDetailsPersonality() {
        const container = createElement('div', {className: "employee-details-personality"});
        const personalityTitle = createElement('h2', {}, "Personality:");
        const personality = createElement('p', {}, this.employee.personality);

        container.append(personalityTitle, personality);
        return container
    }

    createEmployeeDetailsHistory() {
        const container = createElement('div', {className: "employee-details-history"});
        const personalityTitle = createElement('h2', {}, "History:");
        const personality = createElement('p', {}, this.employee.history);

        container.append(personalityTitle, personality);
        return container
    }

    createEmployeeDetails() {
        this.employeeContainer.append(this.createEmployeeDetailsHeader(), 
                        this.createEmployeeDetailsDescription(),
                        this.createEmployeeDetailsPersonality(),
                        this.createEmployeeDetailsHistory())
    }
}