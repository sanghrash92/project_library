// form set up

const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

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

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
let read = document.querySelector('#read');
const add = document.querySelector('.add');
const closeBtn = document.querySelector('.modal');


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title.value,
    this.author = author.value,
    this.pages = pages.value,
    this.read = read.checked
}

let addBook;

function addBookToLibrary(event) {
    event.preventDefault();
    addBook = new Book(title, author, pages, read);
    if(addBook.title === '' || addBook.author === '' || addBook.pages === '') {
        alert('Please input the required fields!')
    } else {
        myLibrary.push(addBook);
        createBook();
        reset();
    }
}


function createBook() {
    const library = document.querySelector('.library-container');
    const bookContainer = document.createElement('div');
    const titleDiv = document.createElement('h3');
    const authorDiv = document.createElement('h3');
    const pagesDiv = document.createElement('h3');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    for (let i = 0; i < myLibrary.length; i++) {
        
        titleDiv.textContent = myLibrary[i].title;
        bookContainer.insertBefore(titleDiv, authorDiv.nextSibling);
        
        authorDiv.textContent = myLibrary[i].author;
        bookContainer.insertBefore(authorDiv, pagesDiv.nextSibling);
        
        pagesDiv.textContent = myLibrary[i].pages;
        bookContainer.insertBefore(pagesDiv, readBtn.nextSibling);
        
        readBtn.classList.add('button-read')
        bookContainer.insertBefore(readBtn, removeBtn.nextSibling);
        if (myLibrary[i].read === false) {
            readBtn.textContent = 'Not Read';
            readBtn.style.backgroundColor = 'red';
        } else {
            readBtn.textContent = 'Read';
            readBtn.style.backgroundColor = 'green';
        }
        
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        bookContainer.insertBefore(removeBtn, null);
        
        bookContainer.classList.add('grid-item');
        library.appendChild(bookContainer);

        
    }
    
    readBtn.addEventListener("click", changeRead)
        
    function changeRead() {
        for(let books in myLibrary) {
            myLibrary[books].read = !myLibrary[books].read;  
            if(myLibrary[books].read === false) {
                readBtn.textContent = 'Not Read';
                readBtn.style.backgroundColor = 'red';
            } else {
                readBtn.style.backgroundColor = 'green';
                readBtn.textContent = 'Read';
            }
        }

    }
    
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.findIndex(item => item.field === title.valu), 1);
        library.removeChild(bookContainer);
    })
}

function reset() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = '';
    closeModal(closeBtn);
}

add.addEventListener("click", addBookToLibrary)