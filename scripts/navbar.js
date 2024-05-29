const header = document.getElementsByTagName('header')[0];

const nav = document.createElement('nav');

const logoLink = document.createElement('a');
logoLink.href = './index.html';

const logoImg = document.createElement('img');
logoImg.className = 'logo';
logoImg.src = '../assets/logo.png';
logoImg.alt = 'logo';

logoLink.appendChild(logoImg);

const navMask = document.createElement('div');
navMask.className = 'nav-mask';
navMask.id = 'nav-mask';

const navbarLinks = document.createElement('ul');
navbarLinks.className = 'nav-links';

function createNavItem(href, text, dropdownItems) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = href;
  a.textContent = text;
  li.appendChild(a);

  if (dropdownItems) {
    const dropdown = document.createElement('ul');
    dropdown.className = 'dropdown';
    dropdownItems.forEach(item => {
      const dropdownLi = document.createElement('li');
      const dropdownA = document.createElement('a');
      dropdownA.href = item.href;
      dropdownA.textContent = item.text;
      dropdownLi.appendChild(dropdownA);
      dropdown.appendChild(dropdownLi);
    });
    li.appendChild(dropdown);
  }

  return li;
}

navbarLinks.appendChild(createNavItem('index.html', 'Home'));
navbarLinks.appendChild(createNavItem('calendar.html', 'Calendar', [
  { href: 'calendar.html', text: 'Events' },
  { href: 'calendar.html', text: 'Stop times' }
]));
navbarLinks.appendChild(createNavItem('benefits.html', 'Benefits', [
  { href: './stalling.html', text: 'Stalling' },
  { href: './facility-card.html', text: 'Facility card' },
  { href: './rent-horse.html', text: 'Rent horse' }
]));
navbarLinks.appendChild(createNavItem('index.html', 'Facilities'));
navbarLinks.appendChild(createNavItem('./about-us.html', 'About VSRC', [
  { href: './employees.html', text: 'Employees' }
]));
navbarLinks.appendChild(createNavItem('contact-us.html', 'Contact us'));

const searchDiv = document.createElement('div');
searchDiv.className = 'nav-search';

const searchIcon = document.createElement('img');
searchIcon.src = '../assets/search-icon.png';
searchIcon.alt = 'search-icon';
searchIcon.width = 15;

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search...';

searchDiv.appendChild(searchIcon);
searchDiv.appendChild(searchInput);

navbarLinks.appendChild(searchDiv);

const hamburger1 = document.createElement('div');
hamburger1.className = 'hamburger';
hamburger1.id = 'hamburger';

for (let i = 0; i < 3; i++) {
  const span = document.createElement('span');
  hamburger1.appendChild(span);
}

nav.appendChild(logoLink);
nav.appendChild(navMask);
nav.appendChild(navbarLinks);
nav.appendChild(hamburger1);

header.appendChild(nav);

document.body.appendChild(header);
