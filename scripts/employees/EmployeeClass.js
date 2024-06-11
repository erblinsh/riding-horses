import { createElement } from "../helpers/createElement.js"

export class Employee {
    constructor(employee) {
      this.employee = employee
    }

    createEmployeeImage() {
      return createElement('img', { src: this.employee.image })
    }
  
    createEmployeeTitle() {
      return createElement('h3', {},this.employee.name)
    }
  
    createEmployeeRole() {
      return createElement('p', {},  this.employee.role)
    }
  
    createEmployeeAsLink() {
      const link = createElement('a', {href: `employees-single-page/${this.employee.id}.html`})
      link.append(this.createEmployeeImage(), this.createEmployeeTitle(), this.createEmployeeRole());   
      return link
    }
  
    async createEmployeeCard(location = document.body) {
      const employeeCardContainer = document.createElement('div');
      employeeCardContainer.className = "employees-card";
      employeeCardContainer.appendChild(this.createEmployeeAsLink())
  
      location.appendChild(employeeCardContainer)
    }
  }
  