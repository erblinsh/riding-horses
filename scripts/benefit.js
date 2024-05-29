const benefitsCardsContainer = document.querySelector('.benefits-cards');

function createBenefitCard(cardClass, title, link) {
    const card = document.createElement('div');
    card.className = `benefit-card ${cardClass}`;

    const description = document.createElement('div');
    description.className = 'benefit-card-description';

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const a = document.createElement('a');
    a.href = link;
    a.textContent = 'Read more';

    description.appendChild(h3);
    description.appendChild(a);
    card.appendChild(description);

    return card;
}

benefitsCardsContainer.appendChild(createBenefitCard('benefit-card-1', 'Stalling', './stalling.html'));
benefitsCardsContainer.appendChild(createBenefitCard('benefit-card-2', 'Facility card', './stalling.html'));
benefitsCardsContainer.appendChild(createBenefitCard('benefit-card-3', 'Education', './stalling.html'));
benefitsCardsContainer.appendChild(createBenefitCard('benefit-card-4', 'Rental', './stalling.html'));
benefitsCardsContainer.appendChild(createBenefitCard('benefit-card-5', 'Own horse at secondary school', './stalling.html'));
