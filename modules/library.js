import Book from './book.js';

const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

class Library {
  constructor() {
    this.books = [
      {
        title: 'title1',
        author: 'autor1',
      },
      {
        title: 'title2',
        author: 'autor2',
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
      },
    ];
  }

  loadHTML(index) {
    const superHTML = `
    <li class="book">
      <div class="book-details">
      <h4 id="">"${this.books[index].title}"</h4>
      <p id="">by ${this.books[index].author}</p>
      </div>
      <button id="remove-button${index}">Remove</button>
    </li>
    `;
    document
      .querySelector('.booklist-container')
      .insertAdjacentHTML('beforeend', superHTML);
    document
      .getElementById(`remove-button${index}`)
      .addEventListener('click', () => this.removeBook(index));
  }

  loadBooks() {
    const booksAmount = this.books.length;
    const emptyHTML = '';
    document.querySelector('.booklist-container').innerHTML = emptyHTML;
    for (let i = 0; i < booksAmount; i += 1) {
      this.loadHTML(i);
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(bookTitle, bookAuthor) {
    if (bookTitle !== '' && bookAuthor !== '') {
      const newBook = new Book(bookTitle, bookAuthor);
      this.books.push(newBook);
      newTitle.value = '';
      newAuthor.value = '';
      this.loadBooks(); // eslint-disable-line no-use-before-define
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.loadBooks(); // eslint-disable-line no-use-before-define
  }
}

const superLibrary = new Library();
export default superLibrary;