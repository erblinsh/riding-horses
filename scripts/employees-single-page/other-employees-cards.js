import { getApi } from '../api/getApi.js';
import { RelatedEmployees } from "./RelatedEmployees.js";

const otherEmployeesContainer = document.getElementsByClassName('other-employees-cards')[0];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const employees = await getApi('employees');
    const relatedEmployees = new RelatedEmployees(employees, otherEmployeesContainer);
    relatedEmployees.createRelatedEmployeesCards(3)    
  } catch(e) {
    console.error(e)
  }
})
