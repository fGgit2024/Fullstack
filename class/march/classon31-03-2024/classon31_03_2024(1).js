console.log("============================class 31.03.2024");

// function getMovieByPages(name, numPages, books) {
//   if (typeof name !== "string") {
//     return;
//   }
function getMovieByPages(numPages, books) {
  if (isNaN(Number(numPages))) {
    return;
  }
  if (!Array.isArray(books)) {
    return;
  }
  // let bookNameToLower = name.toLowerCase();
  // let singelBook = books.find(function (currentBook) {
  //   return currentBook.title.toLowerCase() === bookNameToLower;
  // });
  // console.log(
  //   "(1)The orginal " + singelBook.title + " pages is => " + singelBook.pages
  // );
  // singelBook.pages = numPages;
  // console.log(
  //   "(2)The " +
  //     singelBook.title +
  //     " pages after updatinig is => " +
  //     singelBook.pages
  // );
  // let TheSingelBook = {
  //   title: singelBook.title,
  //   author: singelBook.author,
  //   country: singelBook.country,
  //   imageLink: singelBook.imageLink,
  //   language: singelBook.language,
  //   link: singelBook.link,
  //   pages: singelBook.pages,
  //   year: singelBook.year,
  // };
  // return TheSingelBook;

  // return books.find(
  //   (currentbook) => currentbook.title.toLowerCase() === name.toLowerCase()
  // );

  return books.filter((allbooks) => allbooks.pages > numPages);
}
// resoult = getMovieByPages("Memoirs of Hadrian", 99, books);
// console.log(
//   "The resoult is =>" +
//     "title: " +
//     resoult.title +
//     " author: " +
//     resoult.author +
//     " country: " +
//     resoult.country +
//     " imageLink: " +
//     resoult.imageLink +
//     " language: " +
//     resoult.language +
//     " link: " +
//     resoult.link +
//     " pages: " +
//     resoult.pages +
//     " year: " +
//     resoult.year
// );
var numPages = 200;
resoult = getMovieByPages(numPages, books);
console.log(
  "The resoult of fineding boks whith mor then " + numPages + " is: "
);
for (index = 0; index < resoult.length; index++) {
  console.log(
    index +
      1 +
      ") Title: " +
      resoult[index].title +
      "." +
      " Author: " +
      resoult[index].author +
      "." +
      " Country: " +
      resoult[index].country +
      "." +
      " ImageLink: " +
      resoult[index].imageLink +
      "." +
      " Language: " +
      resoult[index].language +
      "." +
      " Link: " +
      resoult[index].link +
      "." +
      " Pages: " +
      resoult[index].pages +
      "." +
      " Year: " +
      resoult[index].year +
      "."
  );
}
