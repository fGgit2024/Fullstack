console.log("============================Homework 27.03.2024 exercise 02");
console.log(
  "write a function that input from user rating number and return all the movies that higher than this rating"
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
    console.log("Type of movieName " + movieName + " => " + typeof movieName);
    while (breackPoint == 0) {
      movieRating = +prompt("Please input the movie rating");
      if (isNaN(movieRating)) {
        alert("Please input numbers only");
      } else {
        // console.log("movieObject{movieName:movieName} => " + movieName);
        // console.log("movieObject{movieRating:movieRating} => " + movieRating);
        movieObject = { movieName: movieName, movieRating: movieRating };
        // console.log(
        //   "movieObject => movieName " +
        //     movieObject.movieName +
        //     " movieRating " +
        //     movieObject.movieRating
        // );
        resoult.push(movieObject);
        breackPoint = 1;
      }
    }
    breackPoint = 0;
  }
  return resoult;
}

while (breackPoint == 0) {
  numMovies = +prompt("Please input the number of novies");
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
