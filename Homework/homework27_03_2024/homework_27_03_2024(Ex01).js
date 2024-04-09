console.log("============================Homework 27.03.2024 exercise 01");
console.log(
  "write a function that input from user ( using prmopt ) 3 movies and push them to array"
);
var breackPoint = 0;
function getMovie(numMovies) {
  var resoult = [];
  var movieObject = {};
  var breackPoint = 0;
  var movieName;
  var movieRating;
  for (index = 0; index < numMovies; index++) {
    movieName = prompt("Please input the novie name");
    movieName = movieName.toString();
    while (breackPoint == 0) {
      movieRating = +prompt("Please input the movie rating");
      if (isNaN(movieRating)) {
        alert("Please input numbers only");
      } else {
        movieObject = { movieName: movieName, movieRating: movieRating };
        console.log(
          "movieObject => movieName => " +
            movieObject.movieName +
            " movieRating => " +
            movieObject.movieRating
        );
        resoult.push(movieObject);
        breackPoint = 1;
      }
    }
    breackPoint = 0;
  }
  return resoult;
}

function getMovieByRaiting(ratingForSearch) {
  console.log("Movie rating for search => " + ratingForSearch);
  for (index = 0; index < numMovies; index++) {
    var movieRating = resoult[index];
    console.log(
      "Movie rating at resoult[" + index + "] => " + movieRating.movieRating
    );
    if (movieRating.movieRating > ratingForSearch) {
      console.log(resoult[index]);
    }
  }
}
0;

function moveNameToDelete(TheMoveNameToDelete) {
  console.log("The movie name to delete => " + TheMoveNameToDelete);
  for (index = 0; index < numMovies; index++) {
    var MoveNameToDelete = resoult[index];
    console.log(
      "Movie name at resoult[" + index + "] => " + MoveNameToDelete.movieName
    );
    if (MoveNameToDelete.movieName == TheMoveNameToDelete) {
      console.log(
        "Delete resoult[" + index + "] : " + MoveNameToDelete.movieName
      );
      // resoult.splice(index, 1, "Deleted");
      resoult.splice(index, 1);
    }
  }
  return resoult;
}

while (breackPoint == 0) {
  var numMovies = +prompt("Please input the number of novies");
  if (isNaN(numMovies)) {
    alert("Please input numbers only");
  } else {
    breackPoint = 1;
  }
}
resoult = getMovie(numMovies);
for (index = 0; index < numMovies; index++) {
  console.log(resoult[index]);
}

console.log("============================Homework 27.03.2024 exercise 02");
console.log(
  "write a function that input from user rating number and return all the movies that higher than this rating"
);
breackPoint = 0;
while (breackPoint == 0) {
  var ratingForSearch = +prompt(
    "Please input the movie rating for finding movies according to heir ratings"
  );
  if (isNaN(ratingForSearch)) {
    alert("Please input numbers only");
  } else {
    breackPoint = 1;
  }
}
resoult1 = getMovieByRaiting(ratingForSearch);

console.log("============================Homework 27.03.2024 exercise 03");
console.log("write a function that delete a movie by movieNameg");

var TheMoveNameToDelete = prompt("Please input the move name to delete");
TheMoveNameToDelete = TheMoveNameToDelete.toString();
resoult2 = moveNameToDelete(TheMoveNameToDelete);
for (index = 0; index < numMovies; index++) {
  console.log("The data at resoult[" + index + "] is =>");
  console.log(resoult[index]);
}
