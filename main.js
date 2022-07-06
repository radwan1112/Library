let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read)

  if (localStorage.getItem('library') == null) {
    localStorage.setItem('library', '[]')
  }

  const old_library = JSON.parse(localStorage.getItem('library'));
  old_library.push(book);

  localStorage.setItem('library', JSON.stringify(old_library));
}


function validate() {
  const bookForm = document.getElementById('addBookForm')

  if (bookForm.checkValidity()) {
    const title = document.getElementById('book_title').value
    const author = document.getElementById('book_author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    addBookToLibrary(title, author, pages, read);
    return true;
  } else {
    return false;
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      },
      false,
    )
  })
})()
