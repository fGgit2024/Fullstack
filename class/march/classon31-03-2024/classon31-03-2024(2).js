console.log("============================class 31.03.2024");
function init() {
  const booksTitleDiv = document.getElementById("booksTitle"); // create the books list container
  booksTitleDiv.style.border = "1px solid black";
  booksTitleDiv.style.background = "pink";
  const divider = " <=" + " | " + "=> ";

  // create book ui
  // var singleBook = books[0]
  // var singleBook2 = books[1]

  // books.forEach(function (currentBook) {

  // })

  for (let index = 0; index < books.length; index++) {
    const currentBook = books[index];
    const booksTitleContainerDiv = document.createElement("div"); // create the single book container

    const bookTitleH1 = document.createElement("h1"); // create header of H3 type for title
    bookTitleH1.style.textAlign = "center";
    // bookTitleH1.style.background = "pink";
    bookTitleH1.innerText = "Book title : " + "'" + currentBook.title + "'"; // insert the title from the Data into UI
    booksTitleContainerDiv.append(bookTitleH1); // append title (h1) into single book container
    booksTitleDiv.append(booksTitleContainerDiv); // append single book container into books title container

    const bookTitleH4 = document.createElement("h4"); // create header for title
    bookTitleH4.style.display = "flex";
    bookTitleH4.style.background = "gray";

    bookTitleH4.innerText =
      "Author : " +
      currentBook.author +
      divider +
      "Country : " +
      currentBook.country +
      divider +
      "ImageLink : " +
      currentBook.imageLink +
      divider +
      "Language : " +
      currentBook.language +
      divider +
      "link : " +
      currentBook.link +
      divider +
      "Pages : " +
      currentBook.pages +
      divider +
      "Year : " +
      currentBook.year;
    booksTitleContainerDiv.append(bookTitleH4);
    booksTitleDiv.append(booksTitleContainerDiv);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "button-center";
    const buttonClickHear = document.createElement("button");
    buttonClickHear.innerText = "click hear";
    buttonClickHear.addEventListener("click", function () {
      bookTitleH4.style.background = "yellow";
      alert("Book number " + index);
    });
    const buttonDelet = document.createElement("button");
    crashCan = "🗑️";
    buttonDelet.innerText = crashCan;
    buttonDelet.addEventListener("click", function () {
      booksTitleContainerDiv.remove();
    });
    buttonsDiv.append(buttonClickHear, buttonDelet);
    booksTitleContainerDiv.append(buttonsDiv);
    booksTitleDiv.append(booksTitleContainerDiv);

    // booksTitleContainerDiv.append(bookTitleH4, buttonClickHear, buttonDelet);

    // append title (h3 and h4) into single book container
    // const bookTitleH5 = document.createElement("h5"); // create header for title
    // bookTitleH5.innerText = currentBook.author; // insert the title from the Data into UI
    // booksTitleContainerDiv.append(bookTitleH5); // append title (h3 and h4) into single book container
  }
}

init();

// author: "Chinua Achebe",
//     country: "Nigeria",
//     imageLink: "images/things-fall-apart.jpg",
//     language: "English",
//     link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
//     pages: 209,
//     title: "Things Fall Apart",
//     year: 1958,
