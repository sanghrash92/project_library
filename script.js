let myLibrary = [];

function Book(title, author, numPages, status) {
    this.title = title,
    this.author = author,
    this.numPages = numPages,
    this.status = status,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.status}, `
    };
}

// const mainContainer = document.querySelector('.main-container');
// const container = document.querySelector('.container');

// function addBook() {
//     const btn = document.querySelector('.btn');
//     btn.addEventListener('click', render)
// }

// function render() {
//     container.classList.add('render')
// }

const openBtn = document.querySelector('.btn');
const closeBtn = document.querySelector(".cancel")

function openForm() {
    document.getElementById('myForm').style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

openBtn.addEventListener('click', openForm)
closeBtn.addEventListener('click', closeForm)



