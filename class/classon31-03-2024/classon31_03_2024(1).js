console.log("============================class 31.03.2024");

function getMovieByPages(name, numPages, books) {
  if (typeof name !== "string") {
    return;
  }
  if (isNaN(Number(numPages))) {
    return;
  }
  if (!Array.isArray(books)) {
    return;
  }
  let bookNameToLower = name.toLowerCase();
  let singelBook = books.find(function (currentBook) {
    return currentBook.title.toLowerCase() === bookNameToLower;
  });
  console.log(
    "(1)The orginal " + singelBook.title + " pages is => " + singelBook.pages
  );
  singelBook.pages = numPages;
  console.log(
    "(2)The " +
      singelBook.title +
      " pages after updatinig is => " +
      singelBook.pages
  );
  let TheSingelBook = {
    title: singelBook.title,
    author: singelBook.author,
    country: singelBook.country,
    imageLink: singelBook.imageLink,
    language: singelBook.language,
    link: singelBook.link,
    pages: singelBook.pages,
    year: singelBook.year,
  };
  return TheSingelBook;
}
resoult = getMovieByPages("Memoirs of Hadrian", 99, books);
console.log(
  "The resoult is =>" +
    "title: " +
    resoult.title +
    " author: " +
    resoult.author +
    " country: " +
    resoult.country +
    " imageLink: " +
    resoult.imageLink +
    " language: " +
    resoult.language +
    " link: " +
    resoult.link +
    " pages: " +
    resoult.pages +
    " year: " +
    resoult.year
);
