let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

        console.log(title, author, pages)


}

const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary);