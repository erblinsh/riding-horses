const horses = [
    { id: 1, name: 'Blaze', link: './horses-single-page/horse-1.html', description: 'Blaze is a majestic horse known for its speed and agility.' },
    { id: 2, name: 'Midnight', link: './horses-single-page/horse-2.html', description: 'Midnight is a gentle horse with a calm demeanor.' },
    { id: 3, name: 'Starlight', link: './horses-single-page/horse-3.html', description: 'Starlight is a spirited horse with a love for adventure.' },
    { id: 4, name: 'Whisper', link: './horses-single-page/horse-4.html', description: 'Whisper is a loyal companion, always ready to explore.' },
    { id: 5, name: 'Spirit', link: './horses-single-page/horse-5.html', description: 'Spirit is a graceful horse with a kind heart.' },
    { id: 6, name: 'Daisy', link: './horses-single-page/horse-6.html', description: 'Daisy is a playful horse who enjoys spending time outdoors.' }
];

const container = document.getElementById('rent-horse-cards');

horses.forEach(horse => {
    const rentHorseCard = document.createElement('div');
    rentHorseCard.classList.add('rent-horse-card', `rent-horse-card-${horse.id}`);

    const rentHorseCardDescription = document.createElement('div');
    rentHorseCardDescription.classList.add('rent-horse-card-description');

    const horseName = document.createElement('h3');
    horseName.textContent = horse.name;

    const horseDescription = document.createElement('p');
    horseDescription.textContent = horse.description;

    const horseLink = document.createElement('a');
    horseLink.href = horse.link;
    horseLink.textContent = 'Learn more about this horse';

    rentHorseCardDescription.append(horseName, horseDescription, horseLink);

    rentHorseCard.appendChild(rentHorseCardDescription);

    container.appendChild(rentHorseCard);
});
