import { createElement } from './helpers/createElement.js'

export class Navbar {
  constructor(headerElement) {
      this.headerElement = headerElement;
      this.nav = this.createNav();
      this.init();
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
      const logoLink = createElement('a', {href: '../../index.html'});
      const logoImg = createElement('img', {className: 'logo', src: '../../assets/logo.png', alt: 'logo'});

      logoLink.appendChild(logoImg);
      return logoLink;
  }

  createNavMask() {
      return createElement('div', {className: 'nav-mask', id: 'nav-mask'});
  }

  createNavbarLinks() {
      const navbarLinks = createElement('ul', {className: 'nav-links'});

      navbarLinks.appendChild(this.createNavItem('../index.html', 'Home'));
      navbarLinks.appendChild(this.createNavItem('../calendar.html', 'Calendar', [
          { href: '../calendar.html', text: 'Events' },
          { href: '../calendar.html', text: 'Stop times' }
      ]));
      navbarLinks.appendChild(this.createNavItem('benefits.html', 'Benefits', [
          { href: '../stalling.html', text: 'Stalling' },
          { href: '../facility-card.html', text: 'Facility card' },
          { href: '../rent-horse.html', text: 'Rent horse' }
      ]));
      navbarLinks.appendChild(this.createNavItem('../index.html', 'Facilities'));
      navbarLinks.appendChild(this.createNavItem('../about-us.html', 'About VSRC', [
          { href: '../employees.html', text: 'Employees' }
      ]));
      navbarLinks.appendChild(this.createNavItem('../contact-us.html', 'Contact us'));
      navbarLinks.appendChild(this.createNavThemeIcon());

      navbarLinks.appendChild(this.createSearchContainer());
      return navbarLinks;
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
        const searchIcon = createElement('img', {src: '../../assets/search-icon.png', alt: 'search-icon', width: 15});
        const searchInput = createElement('input', {type: 'text', placeholder: 'Search...'});

        searchContainer.appendChild(searchIcon);
        searchContainer.appendChild(searchInput);

        return searchContainer;
    }

    createNavThemeIcon() {
        const isDarkModeActive = localStorage.getItem('dark-mode') === 'true';

        const src = isDarkModeActive ? '../../../assets/light-mode-icon.png' : '../../../assets/dark-mode-icon.png';
        
        const iconContainer = createElement('img', {src, className: "nav-theme-icon"});

        if (isDarkModeActive) {
            document.body.classList.add('dark-mode');
        }

        iconContainer.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            const isDarkModeNow = document.body.classList.contains('dark-mode');
            localStorage.setItem('dark-mode', isDarkModeNow.toString());

            iconContainer.src = isDarkModeNow ? '../../../assets/light-mode-icon.png' : '../../../assets/dark-mode-icon.png';
        });

        return iconContainer;
    }

    createHamburger() {
        const hamburger = createElement('div', {className: 'hamburger', id: 'hamburger'});
  
        for (let i = 0; i < 3; i++) {
            const span = createElement('span');
            hamburger.appendChild(span);
        }
  
        return hamburger;
    }

  init() {
      this.headerElement.appendChild(this.nav);
  }
}

const header = document.getElementsByTagName('header')[0];
const navbar = new Navbar(header);