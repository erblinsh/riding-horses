import { getApi } from '../api/getApi.js';
import { EmployeeManager } from './EmployeeManagerClass.js';

const employeesContainer = document.getElementsByClassName('employees-cards')[0];

document.addEventListener('DOMContentLoaded', async () => {
  const perPage = 8;  
  const page = 1;
  
  try {
        const employees = await getApi(`employees?_page=${page}&_per_page=${perPage}`);
        new EmployeeManager(employees.data, employeesContainer, employees.next, perPage / 4);
    } catch (e) {
        console.error(e);
    }
});
