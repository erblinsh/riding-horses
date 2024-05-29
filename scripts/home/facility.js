function createFacility(title, description, description2) {
    const facilityDiv = document.createElement('div');
    facilityDiv.className = 'facility';
  
    const facilityTitle = document.createElement('h3');
    facilityTitle.textContent = title;
  
    const facilityDescription = document.createElement('p');
    facilityDescription.textContent = description;
  
    facilityDiv.appendChild(facilityTitle);
    facilityDiv.appendChild(facilityDescription);
    
    if(description2) {
        const facilityDescription2 = document.createElement('p');
        facilityDescription2.textContent = description2;

        facilityDiv.appendChild(facilityDescription2);
    }
  
    return facilityDiv;
  }
  

const facilities = [
    {
      title: 'Equestrian tracks',
      description: '2 indoor riding arenas with Walber ebb/flood fiber bottom. The courses follow the international goals of 20×60 and 30×70.',
      description2: 'In addition, outdoor show jumping and 2x dressage arenas.'
    },
    {
      title: 'Planting area',
      description: 'Several stalls and 2 water fountains, located in the stalls and directly opposite the saddle rooms.'
    },
    {
      title: 'Stalling',
      description: 'Our 84 Röwer & Rüb horse boxes are divided into 2 connected halls with easy access to both the boarding area and the riding halls.'
    },
    {
      title: 'Local area',
      description: 'Vestbirk Sportsridecenter is located in the middle of Søhøjlandet and its magnificent nature, with direct access to the nature trail from the grounds of the riding center.'
    }
  ];
  
  const facilityCards = document.getElementsByClassName('facilities-cards')[0];
  
  facilities.forEach(facility => {
    const facilityElement = createFacility(facility.title, facility.description, facility.description2);
    facilityCards.appendChild(facilityElement);
  });
  


//   facilityCards.appendChild(container);