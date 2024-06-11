
import {Employee} from './EmployeeClass.js'

export class EmployeeManager {
    constructor(employees,employeesContainer) {
      this.employees = employees;
      this.employeesContainer = employeesContainer || document.body
    }
    
    getOneEmployee(id) {
      return this.employees.find(e => e.id === id)
    }
  
    async createOneEmployeeCard(id) {
      const employeeData = await this.getOneEmployee(id)
  
      if(employeeData) {
        const employee = new Employee(employeeData);
        employee.createEmployeeCard(this.employeesContainer);
      } else {
        console.error(`Employee with id ${id} not found!`)
      }
    }
  
    createEmployeesCards() {
      this.employees.forEach(e => this.createOneEmployeeCard(e.id))
    }
  }
  