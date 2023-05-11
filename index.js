import superLibrary from "./modules/library.js";
import loadBooks from './modules/loadBooks.js'

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

function showSection(sectionId) {
  const section1 = document.getElementById('books');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');

  if (sectionId === 'section1') {
    section1.classList.remove('hidden');
    section2.classList.add('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section2') {
    section1.classList.add('hidden');
    section2.classList.remove('hidden');
    section3.classList.add('hidden');
  } else if (sectionId === 'section3') {
    section1.classList.add('hidden');
    section2.classList.add('hidden');
    section3.classList.remove('hidden');
  }
}

listLink.addEventListener('click', () => showSection('section1'));
addLink.addEventListener('click', () => showSection('section2'));
contactLink.addEventListener('click', () => showSection('section3'));
