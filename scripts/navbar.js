import { createElement } from './helpers/createElement.js'

export class Navbar {
  constructor(headerElement, pagesPath, photosPath) {
      this.headerElement = headerElement;
      this.pagesPath = pagesPath;
      this.photosPath = photosPath;
      this.nav = this.createNav();
      this.init();
      this.navHamburger();
  }

  createNav() {
      const nav = createElement('nav');
      
      nav.appendChild(this.createLogoLink());
      nav.appendChild(this.createNavMask());
      nav.appendChild(this.createNavbarLinks());
      nav.appendChild(this.createHamburger());
      
      return nav;
  }

  createLogoLink() {
      const logoLink = createElement('a', {href: `${this.pagesPath}index.html`});
      const logoImg = createElement('img', {className: 'logo', src: `${this.photosPath}logo.png`, alt: 'logo'});
      logoLink.appendChild(logoImg);

      return logoLink;
  }

  createNavMask() {
      return createElement('div', {className: 'nav-mask', id: 'nav-mask'});
  }

  createNavItem(href, text, dropdownItems = null) {
    const li = createElement('li');
    const a = createElement('a', {href}, text);
    li.appendChild(a);

    if (dropdownItems) {
        const dropdown = createElement('ul', {className: 'dropdown'});

        dropdownItems.forEach(item => {
            const dropdownLi = createElement('li');
            const dropdownA = createElement('a', {href: item.href}, item.text);

            dropdownLi.appendChild(dropdownA);
            dropdown.appendChild(dropdownLi);
        });
        li.appendChild(dropdown);
    }

        return li;
    }

    createSearchContainer() {
        const searchContainer = createElement('div', {className: 'nav-search'});
        const searchIcon = createElement('img', {src: `${this.photosPath}search-icon.png`, alt: 'search-icon', width: 15});
        const searchInput = createElement('input', {type: 'text', placeholder: 'Search...'});

        searchContainer.appendChild(searchIcon);
        searchContainer.appendChild(searchInput);

        return searchContainer;
    }

    createNavThemeIcon() {
        const isDarkModeActive = localStorage.getItem('dark-mode') === 'true';
    
        const src = isDarkModeActive ? `${this.photosPath}light-mode-icon.png` : `${this.photosPath}dark-mode-icon.png`;
        
        const iconContainer = createElement('img', {src, className: "nav-theme-icon"});
    
        if (isDarkModeActive) {
            document.body.classList.add('dark-mode');
        }
    
        iconContainer.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
    
            const isDarkModeNow = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDarkModeNow.toString());
    
            iconContainer.src = isDarkModeNow ? `${this.photosPath}light-mode-icon.png` : `${this.photosPath}dark-mode-icon.png`;
        });
    
        return iconContainer;
    }
    

  createNavbarLinks() {
      const navbarLinks = createElement('ul', {className: 'nav-links'});

      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}index.html`, 'Home'));
      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}calendar.html`, 'Calendar', [
          { href: `${this.pagesPath}calendar.html`, text: 'Events' },
          { href: `${this.pagesPath}calendar.html`, text: 'Stop times' }
      ]));
      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}benefits.html`, 'Benefits', [
          { href: `${this.pagesPath}stalling.html`, text: 'Stalling' },
          { href: `${this.pagesPath}facility-card.html`, text: 'Facility card' },
          { href: `${this.pagesPath}rent-horse.html`, text: 'Rent horse' }
      ]));
      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}index.html`, 'Facilities'));
      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}about-us.html`, 'About VSRC', [
          { href: `${this.pagesPath}employees.html`, text: 'Employees' }
      ]));
      navbarLinks.appendChild(this.createNavItem(`${this.pagesPath}contact-us.html`, 'Contact us'));
      navbarLinks.appendChild(this.createNavThemeIcon());

      navbarLinks.appendChild(this.createSearchContainer());
      return navbarLinks;
  }

  

  createHamburger() {
      const hamburger = createElement('div', {className: 'hamburger', id: 'hamburger'});

      for (let i = 0; i < 3; i++) {
          const span = createElement('span');
          hamburger.appendChild(span);
      }

      return hamburger;
  }

  navHamburger() {
    const hamburger = document.getElementById('hamburger');
let navRight = document.getElementById('nav-mask');
let navLinks = document.getElementsByClassName('nav-links')[0];
const navbarSearchInput = document.querySelector('.nav-search input');

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navRight.classList.toggle("active");
        navLinks.classList.toggle("active");
        hamburger.classList.toggle('active');
    });


navbarSearchInput.addEventListener('click', (e) => {
    e.stopPropagation();
});


document.body.addEventListener('click', () => {
    if(navRight.classList.contains("active")) {
        navRight.classList.remove("active");
        navLinks.classList.remove("active");
        hamburger.classList.remove('active');
    }
})
}
  }

  init() {
      this.headerElement.appendChild(this.nav);
  }
}