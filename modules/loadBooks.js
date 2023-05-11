import superLibrary from "./library.js";
import loadHTML from "./loadHTML.js";

export default function loadBooks() {
  const booksAmount = superLibrary.books.length;
  const emptyHTML = '';

  document.querySelector('.booklist-container').innerHTML = emptyHTML;
  for (let i = 0; i < booksAmount; i += 1) {
    loadHTML(i);
  }

  localStorage.setItem('books', JSON.stringify(superLibrary.books));
}