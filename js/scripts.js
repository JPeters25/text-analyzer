// Buisness Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++;
    }
  });
  return wordCount;
}
// Business Logic

// wordCounter() function omitted for brevity.


function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.foreach(function(element) {
  if(element.toLowercase().includes(word.toLowercase())) {
    wordCount++;
  }
});
return wordCount;
}

function removeOffensiveWords(text) {
  const wordArray = text.split(" ");
  let i = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes("zoinks") || element.toLowerCase().includes("muppeteer") || element.toLowerCase().includes("biffaroni") || element.toLowerCase().includes("loopdaloop")) {
      wordArray.splice(i, 1, "******");
    }
  i++;
});
return(wordArray);
// removeOffensiveWords("jeepers jinkies zoinks");
}