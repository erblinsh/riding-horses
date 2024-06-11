import { createElement } from './createElement.js';

export const pagination = (container, last, initialActivePage = 1) => {
    let activePage = parseInt(sessionStorage.getItem('horsePageActive')) || initialActivePage;

    const previosPage = createElement('div', { className: "previos-page", onClick: () => {updateActivePage(activePage - 1); location.reload()}}, "Prev");
    const nextPage = createElement('div', { className: "next-page", onClick: () => {updateActivePage(activePage + 1); location.reload()}}, "Next");

    const firstPage = createElement('div', { className: 'pagination-page', onClick: () => {updateActivePage(1); location.reload()}}, '1');
    const paginationPage = createElement('div', { className: ['pagination-page', "active"] }, `${activePage}`);
    const lastPage = createElement('div', { className: 'pagination-page', onClick: () => {updateActivePage(last); location.reload()} }, `${last}`);

    function updateActivePage(newPage) {
        if (newPage < 1 || newPage > last) return;

        activePage = newPage;
        sessionStorage.setItem('horsePageActive', activePage); 


        if (activePage === 1) {
            paginationPage.style.display = 'none';
            firstPage.classList.add('active');
            lastPage.classList.remove('active');
        } else if (activePage === last) {
            paginationPage.style.display = 'none';
            lastPage.classList.add('active');
            firstPage.classList.remove('active');
        } else {
            paginationPage.style.display = 'block';
            paginationPage.textContent = activePage;
            firstPage.classList.remove('active');
            lastPage.classList.remove('active');
        }

        if (last === 1) {
            console.log(last)
            lastPage.style.display = 'none';
            firstPage.classList.add('active');
        }
    }

    container.append(previosPage, firstPage, paginationPage, lastPage, nextPage);

    updateActivePage(activePage);
}