import superLibrary from './modules/library.js';
import loadBooks from './modules/loadBooks.js';
import showSection from './modules/showSection.js';
import { DateTime } from './modules/luxon.js';

const now = DateTime.now();

const dateText = document.getElementById('dateID');

dateText.textContent = now.toLocaleString(DateTime.DATETIME_MED);

const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

const localbooks = localStorage.getItem('books');
if (localbooks) {
  superLibrary.books = JSON.parse(localbooks);
}

window.addEventListener('load', loadBooks());
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => superLibrary.addBook(newTitle.value, newAuthor.value));

const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

listLink.addEventListener('click', () => showSection('section1'));
addLink.addEventListener('click', () => showSection('section2'));
contactLink.addEventListener('click', () => showSection('section3'));
