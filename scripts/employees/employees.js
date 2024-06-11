import { getApi } from '../api/getApi.js' 
import { EmployeeManager } from './EmployeeManagerClass.js'

const employeesContainer = document.getElementsByClassName('employees-cards')[0]


document.addEventListener('DOMContentLoaded', async () => {
  try {
    const employees = await getApi('employees');
    const employeeManager = new EmployeeManager(employees, employeesContainer);
    await employeeManager.createEmployeesCards();
  } catch (e) {
    console.error(e)
  }
});