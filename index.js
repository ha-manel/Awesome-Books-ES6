import BookCollection from './modules/books.js';
import { DateTime } from './modules/luxon.js';

const booksCollection = new BookCollection();

// Displaying books
booksCollection.displayBooks();

// Adding a new book
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');
const validationMessage = document.querySelector('#form-validation');

const clearValidationMessage = () => {
  validationMessage.innerHTML = '';
  validationMessage.classList.remove('active');
};

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    booksCollection.addBook(titleInput.value, authorInput.value);
    validationMessage.innerHTML = 'Your book has been added successfully';
    validationMessage.classList.add('active');
    setTimeout(clearValidationMessage, 1500);
    titleInput.value = '';
    authorInput.value = '';
  }
});

// Website Navigation
const navList = document.querySelector('#nav-list');
const navAddNew = document.querySelector('#nav-add-new');
const navContact = document.querySelector('#nav-contact');

const bookListSection = document.querySelector('.books-list');
const addNewSection = document.querySelector('.add-new-book');
const contactSection = document.querySelector('.contact-info');

navList.addEventListener('click', () => {
  bookListSection.classList.add('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.remove('display-section');
});

navAddNew.addEventListener('click', () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.add('display-section');
  contactSection.classList.remove('display-section');
});

navContact.addEventListener('click', () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.add('display-section');
});

// Mobile navbar
const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('#nav-links li');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navBar.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navBar.classList.remove('active');
  });
});

// Show date and time
const dateTime = document.querySelector('#date-text');
const clock = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(clock, 1000);