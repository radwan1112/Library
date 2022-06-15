let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const book = new Book('harry potter', 'nobody', 300, true);

console.log(book);

function addBookToLibrary() {

}