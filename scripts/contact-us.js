const contactUsForm = document.getElementById('contact-us-form');

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

contactUsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactUsForm);

    for(item of formData) {
        console.log(`${capitalize(item[0])}: ${item[1]}`)
    }

    alert("Thank you for reaching out to us!")
})