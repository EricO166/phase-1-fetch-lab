function fetchBooks() {
  // ① return the Promise
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // ② only ONE call to response.json()
      return response.json();
    })
    .then((books) => {
      renderBooks(books);   // side effect: update the DOM
      return books;         // forward data to whoever awaits it
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
      throw error;          // keep the Promise in a rejected state
    });
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
