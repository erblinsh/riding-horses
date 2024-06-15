const homeHeaderRightImg = document.getElementById('home-header-right-img');
const eventsAndStop = document.querySelector('.events-and-stop-left');
const partVMSERight = document.querySelector('.part-of-vmse-right');
const partVMSELeft = document.querySelector('.part-of-vmse-left');
const benefitsDescription = document.querySelector('.benefits-description');
const takeYourHorseRight = document.querySelector('.take-your-horse-right');
const takeYourHorseLeft = document.querySelector('.take-your-horse-left');

function slideShowHome() {
    const images = [
        '../assets/horse.jpg', 
        "../assets/header-img-2.png",
        "../assets/header-img-3.png",
        "../assets/header-img-4.png"
    ]
    let imageInd = 0;

    function slideShowHomeHeader() {
        imageInd+=1;
        if(imageInd >= images.length) {
            imageInd = 0
        }
        homeHeaderRightImg.src = images[imageInd]
    }
    if(window.innerWidth > 768) {
        setInterval(() => {
            slideShowHomeHeader()
        }, 1700)
    }
}

slideShowHome()

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            eventsAndStop.classList.add('fadeIn')
        }
    });
}

function handlePartVMSE(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            partVMSELeft.classList.add('fadeInUp');
            partVMSERight.classList.add('fadeInRight');
        }
    });
}

function handleBenefits(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            benefitsDescription.classList.add('fadeInLeft')
        }
    });
}

function handleTakeYourHorse(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            takeYourHorseRight.classList.add('fadeInUp')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);
const observerPart = new IntersectionObserver(handlePartVMSE);
const observerTakeYourHorse = new IntersectionObserver(handleTakeYourHorse);
const observerBenefits = new IntersectionObserver(handleBenefits);

observer.observe(eventsAndStop);
observerPart.observe(partVMSERight);
observerTakeYourHorse.observe(takeYourHorseLeft);
observerBenefits.observe(benefitsDescription);