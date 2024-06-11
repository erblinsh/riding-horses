import { createElement } from "./helpers/createElement.js";
import { showMessage } from "./helpers/showMessage.js";

export class Footer {
    constructor() {
        this.footer = document.createElement('footer');
    }

    createListItem(spanText, content) {
        const listItem = createElement('li');
        const span = createElement('span', {}, spanText);
        listItem.appendChild(span);
        listItem.appendChild(content);
        return listItem;
    }

    createFooterAddress() {
        const addressLink = createElement('a', {
            href: 'https://www.google.com/maps/place/Kongevej+32A,+8752+%C3%98stbirk/@55.974161,9.7219823,17z/data=!3m1!4b1!4m5!3m4!1s0x464c7a3d0464540f:0x4c3775602ee157db!8m2!3d55.974161!4d9.724171'
        }, 'Kongevej 32a 8752 Vestbirk');
        return this.createListItem('Address', addressLink);
    }

    createFooterContact() {
        const contactContent = createElement('div', {}, [
            createElement('span', {}, 'Phone: 75 78 11 41'),
            createElement('span', {}, 'Email: ap@vmse.dk')
        ]);
        return this.createListItem('Contact', contactContent);
    }

    createFooterHours() {
        const hoursContent = createElement('span', {}, 'Monday – Friday: 9:00–15:00');
        return this.createListItem('Office opening hours', hoursContent);
    }

    createFooterSection(titleText, items) {
        const section = createElement('div', { className: 'footer-item' });
        const title = createElement('h2', {}, titleText);
        const list = createElement('ul', { className: 'footer-item-list' });

        items.forEach(item => list.appendChild(item));

        section.appendChild(title);
        section.appendChild(list);
        return section;
    }

    createNavigationSection() {
        const navItems = ['Privacy policy', 'About VSRC', 'Contact us', 'Benefits', 'Calendar', 'Facilities', 'Employees']
            .map(text => createElement('li', {}, text));
        return this.createFooterSection('Navigation', navItems);
    }

    createSearchSection() {
        const searchDiv = createElement('div', { className: 'footer-item-search' }, [
            createElement('input', { type: 'text', placeholder: 'Search...' }),
            createElement('h3', {}, 'GO')
        ]);

        const subscribeForm = createElement('form', { className: 'footer-item-search', id: 'subscribe-form' }, [
            createElement('input', { type: 'email', id: 'subscribe-email', name: 'email', placeholder: 'Enter email...', required: true }),
            createElement('h3', {}, 'GO')
        ]);
        
        subscribeForm.addEventListener('submit', this.handleSubscribe.bind(this));

        const section = createElement('div', { className: 'footer-item' }, [
            createElement('h2', {}, 'Search'),
            searchDiv,
            createElement('h2', {}, 'Subscribe'),
            subscribeForm
        ]);

        return section;
    }

    setCookiee(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";

        return "hello"
    }

    handleSubscribe(event) {
        event.preventDefault(); 
    
        const emailInput = event.target.querySelector('#subscribe-email');
        const email = emailInput.value;
    
        this.setCookiee('subscribeEmail', email, 365);
    
        console.log(`Subscribe email: ${email}`);

        showMessage('Thank You', "Thank you for subscribing!!", 4000, true)
    
        emailInput.value = '';
    }

    render() {
       this.footer.appendChild(this.createFooterSection('Vestbirk Sportsriding Center', [
            this.createFooterAddress(),
            this.createFooterContact(),
            this.createFooterHours()
        ]));
        this.footer.appendChild(this.createNavigationSection());
        this.footer.appendChild(this.createSearchSection());
        document.body.appendChild(this.footer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const footer = new Footer();
    footer.render();
});