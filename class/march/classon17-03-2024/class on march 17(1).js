console.log("============================class 17.03.2024 (1)");

function check_length(sentence) {
  sentence.toString();
  console.log("sentence " + sentence);
  if (sentence.length > 20) {
    return "Text too long";
  } else {
    console.log("sentence.langth " + sentence.length);
    return sentence.charAt(sentence.length - 1);
  }
}

var sentence = prompt("Please input a sentence");

// check_length(sentence);
var resoult = check_length(sentence);
console.log(resoult);
