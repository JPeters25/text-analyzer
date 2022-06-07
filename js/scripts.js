// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

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

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function frequencyInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const frequentWordArray = text.split(" ");
  let frequencyOutputArray = [];
  let iCounter = 0;
  let arrayLength = frequentWordArray.length;
  frequentWordArray.sort();
  for (let i = 0; i < arrayLength; i++) {
    let element = frequentWordArray.at(iCounter);
    let next = frequentWordArray.at(iCounter + 1);
    if (element.toLowerCase() === next) {
      frequentWordArray.splice(iCounter, 1);
    }
    else{
      let repeatedWord = numberOfOccurrencesInText(element, text) + " " + element;
      frequencyOutputArray.push(repeatedWord);
      iCounter ++;
      console.log(repeatedWord, frequencyOutputArray);
    }
  };
  frequencyOutputArray.sort();
  frequencyOutputArray.reverse();
  let frequencyOutputString = frequencyOutputArray.join(" ");
  console.log(frequencyOutputString);
  return "<p>" + frequencyOutputString + "</p>";
}

// UI Logic

function removeOffensiveWords(words,text) {
  const wordArray = text.split(" ");
  let i = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes("zoinks") || element.toLowerCase().includes("muppeteer") || element.toLowerCase().includes("biffaroni") || element.toLowerCase().includes("loopdaloop")) {
      wordArray.splice(i, 1, "******");
    }
  i++;
});
return(wordArray);
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      let short = element.replace(word , "");
      htmlString = htmlString.concat(short + "<b>" + word + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#word-frequency").html(frequencyInText(word, passage));
  });
});