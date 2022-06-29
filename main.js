let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {}

function validate() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const read = document.getElementById('read').checked

  console.log(read)
}

function doForm() {
  let data = new FormData()

  data.append('book', document.getElementById('book_title').value)
  data.append('author', document.getElementById('book_author').value)
  data.append('pages', document.getElementById('pages').value)
  data.append('read', document.getElementById('read').checked)

  for (let [t, a, p, r] of data.entries()) {
    console.log(t, a, p, r)
  }
  return false
}