console.log("============================Class on april 03 exercise 2");

function init() {
  const booksListDiv = document.getElementById("booksList"); // create the books list container
  booksListDiv.style.border = "1px solid black";
  booksListDiv.style.background = "pink";
  booksListDiv.style.textAlign = "center";
  draw(books);
}
function search() {
  const input = document.getElementById("searchInput"); //[input = ELEMENT INPUT FROM DOM]
  const searchValue = input.value;
  const newBooksArray = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  draw(newBooksArray);
}
function clearBooks() {
  //  reminder make it work
  // const htmlCollectionBooks = document.getElementById("booksList").children
  // document.getElementById("booksList").children.for
  // for (let index = 0; index < htmlCollectionBooks.length; index++) {
  //     htmlCollectionBooks[index].remove()
  // }
  document.getElementById("booksList").innerHTML = "";
}
function draw(booksData) {
  clearBooks();
  const uiBooks = booksData.map((book) => getSingleBookUI(book));
  document.getElementById("booksList").append(...uiBooks);
  // for (let index = 0; index < booksData.length; index++) {
  //     const currentBookUI = getSingleBookUI(booksData[index])
  //     document.getElementById("booksList").append(currentBookUI)
  // }
  updateSelectedBooks(booksData.filter((book) => book.isSelected === true));
  updateTotalResult(booksData.length);
}
function updateTotalResult(lengthOfBooks) {
  document.getElementById(
    "totalResult"
  ).innerHTML = `${lengthOfBooks}/${books.length}`;
}
function updateSelectedBooks(arrayOfSelectedBooks) {
  const selectedBooksContainer = document.getElementById("selectedBooksNumber");
  selectedBooksContainer.innerText = arrayOfSelectedBooks.length;
}
function getSingleBookUI(bookData) {
  if (typeof bookData !== "object") return;
  const bookContainerDiv = document.createElement("div"); // create the single book container
  const id = `${bookData.title.toLowerCase().replaceAll(" ", "-")}`;
  bookContainerDiv.id = id;
  bookContainerDiv.className = "book-card";
  const bookTitleH3 = document.createElement("h3"); // create header for title
  bookTitleH3.innerText = bookData.title; // insert the title from the Data into UI

  const bookTitleH4 = document.createElement("h4"); // create header for title
  bookTitleH4.innerText = bookData.author;
  bookTitleH4.style.background = "green";

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  if (bookData.isSelected === true) {
    button.innerText = "UnSelect";
    bookContainerDiv.style.background = "yellow";
  } else {
    button.innerText = "Select";
    bookContainerDiv.style.background = "pink";
  }
  button.addEventListener("click", function () {
    if (bookData.isSelected === true) {
      bookData.isSelected = false;
    } else {
      bookData.isSelected = true;
    }
    draw(books);
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn", "btn-danger");
  buttonDelete.innerText = "🗑️";
  buttonDelete.addEventListener("click", function () {
    const foundIndex = books.findIndex(
      (book) => book.title.toLowerCase().replaceAll(" ", "-") === id
    );
    if (foundIndex > -1) {
      books.splice(foundIndex, 1);
    }
    draw(books);
  });

  const yearBadge = document.createElement("h1");
  yearBadge.classList.add("badge", "badge-secondary");
  yearBadge.innerText = bookData.year;

  bookContainerDiv.append(
    bookTitleH3,
    bookTitleH4,
    yearBadge,
    button,
    buttonDelete
  );
  return bookContainerDiv;
}

init();
