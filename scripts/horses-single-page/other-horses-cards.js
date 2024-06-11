import { getApi } from '../api/getApi.js';
import { RelatedHorses } from "./RelatedHorses.js";

const otherHorsesContainer = document.getElementsByClassName('other-horses-cards')[0];

async function showRelatedHorsesCards() {
  try {
    const horses = await getApi('horses');
    const relatedHorses = new RelatedHorses(horses, otherHorsesContainer);
    relatedHorses.createRelatedHorsesCards(3)    
  } catch(e) {
    console.error(e)
  }
}

showRelatedHorsesCards()