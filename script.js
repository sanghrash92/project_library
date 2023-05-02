let myLibrary = [];

function Book(title, author, numPages, status) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.status = status
}


const title = document.querySelector('#title');
const author = document.querySelector("#author");
const pages = document.querySelector('#pages');
const submit = document.querySelector('.submit');
const openBtn = document.querySelector('.btn');
const closeBtn = document.querySelector(".cancel");

submit.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    let addBook = new Book(title.value, author.value, pages.value);
    for(let book in addBook) {
        if(addBook.hasOwnProperty(book)) {
            myLibrary.push(addBook[book]);
        }
    }
    console.log(myLibrary)
    reset();
    closeForm();
    render();
}


function render() {
    const container = document.querySelector('.container');
    const author = document.querySelector('.author');
    author.style.color = 'blue'
    author.textContent = `${myLibrary[0]}`;
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'repeat(3fr)'
}

function reset() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    reset();
    document.getElementById("myForm").style.display = "none";
}

openBtn.addEventListener('click', openForm)
closeBtn.addEventListener('click', closeForm)



