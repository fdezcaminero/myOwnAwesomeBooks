import superLibrary from './library.js'; // eslint-disable-line import/no-cycle

const loadHTML = (index) => {
  const superHTML = `
  <li class="book">
    <div class="book-details">
    <h4 id="">"${superLibrary.books[index].title}"</h4>
    <p id="">by ${superLibrary.books[index].author}</p>
    </div>
    <button id="remove-button${index}">Remove</button>
  </li>
  `;

  document
    .querySelector('.booklist-container')
    .insertAdjacentHTML('beforeend', superHTML);
  document
    .getElementById(`remove-button${index}`)
    .addEventListener('click', () => superLibrary.removeBook(index));
};

export default loadHTML;
