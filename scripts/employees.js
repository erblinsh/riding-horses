const employees = [
    {
      href: "./employees-single-page/employee-1.html",
      imgSrc: "../assets/annie (1).jpg",
      imgAlt: "annie",
      name: "Annie Pape",
      position: "Department Manager"
    },
    {
      href: "./employees-single-page/employee-2.html",
      imgSrc: "../assets/klaus.jpg",
      imgAlt: "klaus",
      name: "Klaus Meldgård",
      position: "Instructor, dressage (rider)"
    },
    {
      href: "./employees-single-page/employee-3.html",
      imgSrc: "../assets/sune.jpg",
      imgAlt: "sune",
      name: "Sune Damgaard Jensen",
      position: "Instructor, dressage (rider)"
    },
    {
      href: "./employees-single-page/employee-4.html",
      imgSrc: "../assets/philip.jpg",
      imgAlt: "philip",
      name: "Philip Mejlby",
      position: "Instructor, dressage and jumping (rider)"
    },
    {
      href: "./employees-single-page/employee-5.html",
      imgSrc: "../assets/erling.jpg",
      imgAlt: "erling",
      name: "Erling Naamann",
      position: "Stable staff"
    },
    {
      href: "./employees-single-page/employee-6.html",
      imgSrc: "../assets/jeanette.jpg",
      imgAlt: "jeanette",
      name: "Jeanette Egebjrg",
      position: "Stable staff"
    },
    {
      href: "./employees-single-page/employee-7.html",
      imgSrc: "../assets/solveig.jpg",
      imgAlt: "solveig",
      name: "Solveig Bruun Folkmann",
      position: "Stable staff"
    }
  ];
  
const container = document.getElementsByClassName('employees-cards')[0];

employees.forEach(employee => {
const card = document.createElement('div');
card.className = 'employees-card';

const link = document.createElement('a');
link.href = employee.href;

const img = document.createElement('img');
img.src = employee.imgSrc;
img.alt = employee.imgAlt;

const name = document.createElement('h3');
name.textContent = employee.name;

const position = document.createElement('p');
position.textContent = employee.position;

link.appendChild(img);
link.appendChild(name);
link.appendChild(position);

card.appendChild(link);
container.appendChild(card);
});