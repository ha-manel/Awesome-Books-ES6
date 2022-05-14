export default class BookCollection {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  saveAndRender = () => {
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }

  addBook = (title, author) => {
    const book = {
      title,
      author,
    };
    this.booksArray.push(book);
    this.saveAndRender();
  }

  removeBook = (index) => {
    this.booksArray.splice(index, 1);
    this.saveAndRender();
  }

  displayBooks = () => {
    const booksDiv = document.querySelector('.books');
    booksDiv.innerHTML = '';
    this.booksArray.forEach((book) => {
      booksDiv.innerHTML += `<div class="book-container"><div class="book-info"><p class="display-title">" ${book.title} "</p><p>by</p><p class="display-author">${book.author}</p></div><button class="remove-btn">Remove</button></div>`;
    });
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.removeBook(index);
      });
    });
  }
}