const otherEmployees = [
    {
      className: 'other-employees-card-1',
      name: 'Annie',
      href: './employee-2.html'
    },
    {
      className: 'other-employees-card-2',
      name: 'Klaus',
      href: './employee-2.html'
    },
    {
      className: 'other-employees-card-3',
      name: 'Philip',
      href: './employee-4.html'
    }
  ];
  
const otherEmployeesContainer = document.getElementsByClassName('other-employees-cards')[0];

otherEmployees.forEach(employee => {
    const card = document.createElement('div');
    card.className = `other-employees-card ${employee.className}`;

    const name = document.createElement('h3');
    name.textContent = employee.name;

    const link = document.createElement('a');
    link.href = employee.href;
    link.textContent = 'Learn more';

    card.appendChild(name);
    card.appendChild(link);

    otherEmployeesContainer.appendChild(card);
});