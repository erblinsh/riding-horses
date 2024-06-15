import { Horse } from "../horses/Horse.js";
import { createElement } from "../helpers/createElement.js"

export class HorseSinglePage extends Horse {
    constructor(horse, horseContainer) {
        super(horse);
        this.horseContainer = horseContainer ? horseContainer : document.body
    }

    createContainer() {
        return createElement('div', {className: "other-horses-card"})
    }

    async createHorseCard(horseDetailHref) {
        const container = this.createContainer();
        this.horseCardBgImage(container)
        
        container.append(this.createTitle(), this.createLink(`horse-${this.horse.id}`));

        this.horseContainer.appendChild(container)
    }
}