export default class BookCollection {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (title, author) => {
    const book = {
      title,
      author,
    };
    this.booksArray.push(book);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }

  removeBook = (index) => {
    this.booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }

  displayBooks = () => {
    const booksDiv = document.querySelector('.books');
    booksDiv.innerHTML = '';
    this.booksArray.forEach((book, id) => {
      booksDiv.innerHTML += `<div class="book-container"><div class="book-info"><p class="display-title">" ${book.title.charAt(0).toUpperCase() + book.title.slice(1)} "</p><p>by</p><p class="display-author">${book.author.charAt(0).toUpperCase() + book.author.slice(1)}</p></div><button id="${id}" class="remove-btn">Remove</button></div>`;
    });
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.removeBook(index);
      });
    });
  }
}