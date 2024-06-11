import { Horse } from "./Horse.js";

export class HorsesManager {
    constructor(horses, horsesContainer) {
        this.horses = horses;
        this.horsesContainer = horsesContainer;
    }

    getOneHorse(id) {
        return this.horses.find(h => h.id === id);
    }

    async createOneHorseCard(id) {
        try{
            const horseData = await this.getOneHorse(id);

            if(horseData) {                
                const horse = new Horse(horseData);
                horse.createHorseCard(this.horsesContainer)
            } else {
                console.error("Not enought informations!")
            }
        } catch(e) {
          console.error(e)  
        }
    }

    createHorsesCards() {
        this.horses.forEach(h => this.createOneHorseCard(h.id))
    }
}