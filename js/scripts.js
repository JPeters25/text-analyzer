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
const i = 0;
wordArray.array.forEach(function(element) {
  if (element.toLowercase().includes("zoinks")){
    wordArray.splice(i, 1, "******");
  }
i++;
})
}