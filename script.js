const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const title = document.querySelector('#title');
const author = document.querySelector("#author");
const pages = document.querySelector('#pages');

let myLibrary = [];

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function Book(title, author, numPages, status) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.status = status
}

function addBookToLibrary() {
    let addBook = new Book(title.value, author.value, pages.value);
    for(let book in addBook) {
        if(addBook.hasOwnProperty(book)) {
            myLibrary.push(addBook[book]);
        }
    }
    console.log(myLibrary)
    reset();
}

function reset() {
    title.value = '';
    author.value = '';
    pages.value = '';
}




