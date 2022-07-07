let myLibrary = []

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function view() {

  if (localStorage.getItem('library') == null) {
    localStorage.setItem('library', '[]')
  }

  const old_library = JSON.parse(localStorage.getItem('library'));
  let numOfCard = old_library.length;

  console.log(old_library)
  console.log(numOfCard)

  for(let i = 0; i<numOfCard; i++){

    const card = document.createElement('div');
    card.classList.add('card');
    const body = document.createElement('div');
    body.classList.add('card-body', 'd-flex', 'flex-column', 'align-items-center')
    const header = document.createElement('h5');
    header.classList.add('card-title');
    header.textContent = old_library[i].title;
    const name = document.createElement('p');
    name.classList.add('card-text');
    name.textContent = old_library[i].author;
    const pg = document.createElement('p');
    pg.classList.add('card-text');
    pg.textContent = old_library[i].pages;
    const read_button = document.createElement('a');
    read_button.classList.add('btn');
    if(old_library[i].read){
      read_button.textContent = "Read";
      read_button.classList.add('btn-success');
    }
    else{
      read_button.textContent = "Not Read";
      read_button.classList.add('btn-danger');
    }
    const delete_button = document.createElement('a');
    delete_button.classList.add('btn', 'btn-secondary');
    delete_button.textContent = "Delete";


    const container = document.getElementById('cards_container');
    container.appendChild(card);
    card.appendChild(body);
    body.appendChild(header);
    body.appendChild(name);
    body.appendChild(pg);
    body.appendChild(read_button);
    body.appendChild(delete_button);

  }

}


function addBookToLibrary(id, title, author, pages, read) {


  if (localStorage.getItem('library') == null) {
    localStorage.setItem('library', '[]')
  }

  const book = new Book(id, title, author, pages, read);
  const old_library = JSON.parse(localStorage.getItem('library'));
  old_library.push(book);
  localStorage.setItem('library', JSON.stringify(old_library));

}


function validate() {
  const bookForm = document.getElementById('addBookForm')

  if (bookForm.checkValidity()) {
    const title = document.getElementById('book_title').value;
    const author = document.getElementById('book_author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const id = Math.floor(10000 + Math.random() * 90000);
    addBookToLibrary(id, title, author, pages, read);
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

window.onload = function () {
  view();
}