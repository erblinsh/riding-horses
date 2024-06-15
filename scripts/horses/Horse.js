import { createElement } from '../helpers/createElement.js'

export class Horse {
    constructor(horse) {
        this.horse = horse;
    }
    
    createTitle() {
        return createElement('h3', {}, this.horse.name)
    }
    
    createDescription() {
        return createElement('p', {}, this.horse.description)
    }

    createLink(href, textContent="Learn more") {
        return createElement('a', {href: `${href}.html`}, textContent)
    }

    horseCardBgImage(container) {
        container.style.background = `linear-gradient(#11111173,#11111173), url('${this.horse.image}')`;
        container.style.backgroundSize = "cover";
        container.style.backgroundPosition = "center"
    }

    customHorseCard(textContent) {
        const container = createElement('div', { className: "rent-horse-card-description" });
        container.append(this.createTitle(), this.createDescription(), this.createLink(`horses-single-page/horse-${this.horse.id}`, textContent))
    
        return container;
    }

    createHorseCard(location) {
        const container = createElement('div', {className: "rent-horse-card"})

        this.horseCardBgImage(container)

        container.appendChild(this.customHorseCard());
        location.appendChild(container)
    }
}