const footer = document.getElementsByTagName('footer')[0];

// Create elements
const footerItem1 = document.createElement('div');
const footerItem1Title = document.createElement('h2');
const footerItem1List = document.createElement('ul');
const addressItem = document.createElement('li');
const addressSpan = document.createElement('span');
const contactItem = document.createElement('li');
const contactSpan = document.createElement('span');
const phoneSpan = document.createElement('span');
const emailSpan = document.createElement('span');
const hoursItem = document.createElement('li');
const hoursSpan = document.createElement('span');
const officeHoursSpan = document.createElement('span');
const footerItem2 = document.createElement('div');
const footerItem2Title = document.createElement('h2');
const footerItem2List = document.createElement('ul');
const footerItem3 = document.createElement('div');
const footerItem3SearchTitle = document.createElement('h2');
const footerItem3SearchDiv = document.createElement('div');
const footerItem3SearchInput = document.createElement('input');
const footerItem3SearchButton = document.createElement('h3');
const footerItem3SubscribeTitle = document.createElement('h2');
const subscribeForm = document.createElement('form');
const subscribeEmailInput = document.createElement('input');
const subscribeButton = document.createElement('h3');

// Text content
footerItem1Title.textContent = 'Vestbirk Sportsriding Center';

addressSpan.textContent = 'Address';
const addressLink = document.createElement('a');
addressLink.textContent = 'Kongevej 32a 8752 Vestbirk';
addressLink.href = 'https://www.google.com/maps/place/Kongevej+32A,+8752+%C3%98stbirk/@55.974161,9.7219823,17z/data=!3m1!4b1!4m5!3m4!1s0x464c7a3d0464540f:0x4c3775602ee157db!8m2!3d55.974161!4d9.724171';

contactSpan.textContent = 'Contact';
phoneSpan.textContent = 'Phone: 75 78 11 41';
emailSpan.textContent = 'Email: ap@vmse.dk';

hoursSpan.textContent = 'Office opening hours';
officeHoursSpan.textContent = 'Monday – Friday: 9:00–15:00';

footerItem2Title.textContent = 'Navigation';

footerItem3SearchTitle.textContent = 'Search';
footerItem3SearchButton.textContent = 'GO';
footerItem3SubscribeTitle.textContent = 'Subscribe';
subscribeButton.textContent = 'GO';

// Append child
footerItem1.appendChild(footerItem1Title);

addressItem.appendChild(addressSpan);
addressItem.appendChild(addressLink);
footerItem1List.appendChild(addressItem);

contactItem.appendChild(contactSpan);
contactItem.appendChild(phoneSpan);
contactItem.appendChild(emailSpan);
footerItem1List.appendChild(contactItem);

hoursItem.appendChild(hoursSpan);
hoursItem.appendChild(officeHoursSpan);
footerItem1List.appendChild(hoursItem);

footerItem1.appendChild(footerItem1List);

footerItem2.appendChild(footerItem2Title);
footerItem2.appendChild(footerItem2List);

footerItem3.appendChild(footerItem3SearchTitle);
footerItem3SearchDiv.appendChild(footerItem3SearchInput);
footerItem3SearchDiv.appendChild(footerItem3SearchButton);
footerItem3.appendChild(footerItem3SearchDiv);
footerItem3.appendChild(footerItem3SubscribeTitle);

subscribeForm.appendChild(subscribeEmailInput);
subscribeForm.appendChild(subscribeButton);
footerItem3.appendChild(subscribeForm);

footer.appendChild(footerItem1);
footer.appendChild(footerItem2);
footer.appendChild(footerItem3);

// ClassNames
footerItem1.className = 'footer-item';
footerItem1List.className = 'footer-item-list';
footerItem2.className = 'footer-item';
footerItem2List.className = 'footer-item-list';
footerItem3.className = 'footer-item';
footerItem3SearchDiv.className = 'footer-item-search';
subscribeForm.className = 'footer-item-search';



const navItems = ['Privacy policy', 'About VSRC', 'Contact us', 'Benefits', 'Calendar', 'Facilities', 'Employees'];
navItems.forEach(text => {
  const navItem = document.createElement('li');
  navItem.textContent = text;
  footerItem2List.appendChild(navItem);
});



footerItem3SearchInput.type = 'text';
footerItem3SearchInput.placeholder = 'Search...';

subscribeForm.id = 'subscribe-form';
subscribeEmailInput.type = 'email';
subscribeEmailInput.id = 'subscribe-email';
subscribeEmailInput.name = 'email';
subscribeEmailInput.placeholder = 'Enter email...';



subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Subscribe email: ${subscribeEmailInput.value}`);
});

document.body.appendChild(footer);