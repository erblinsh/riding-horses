import { HorseSinglePage } from './HorseSinglePageClass.js';

export class RelatedHorses {
    constructor(horses, container) {
        this.horses = horses;
        this.container = container;
        this.randomNumbers = new Set();
        this.relatedHorses = new Set();
    }

    getARandomHorse() {
        const nrOfHorses = this.horses.length;
        const randomIntegerInRange = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
        
        let randomNumber;
        
        if (this.randomNumbers.size === nrOfHorses) {
            return null;
        }

        do {
            randomNumber = randomIntegerInRange(0, nrOfHorses - 1);
        } while (this.randomNumbers.has(randomNumber));

        this.randomNumbers.add(randomNumber);
        return this.horses[randomNumber];
    }
    
    async createOneHorseCard(horseData) {
        if (!this.relatedHorses.has(horseData)) {
            const horse = new HorseSinglePage(horseData, this.container);
            await horse.createHorseCard(this.container, horse.horse.id);
            this.relatedHorses.add(horseData);
        }
    }

    async createRelatedHorsesCards(nrOfHorses) {
        let relatedHorses = [];

        while (relatedHorses.length < nrOfHorses) {
            const randomHorses = this.getARandomHorse();

            if (randomHorses && !relatedHorses.includes(randomHorses)) {
                relatedHorses.push(randomHorses);
            }
        }

        for (const horse of relatedHorses) {
            await this.createOneHorseCard(horse);
        }
    }
}