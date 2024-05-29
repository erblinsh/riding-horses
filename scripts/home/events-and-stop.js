const eventsAndStop = document.querySelector('.events-and-stop-left');

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            eventsAndStop.classList.add('fadeIn')
        }
    });
}


const observer = new IntersectionObserver(handleIntersection);

observer.observe(eventsAndStop);