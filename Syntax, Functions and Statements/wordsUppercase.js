//solve 1
function extractAndConvertWords(string) {
    let regex = /\b\w+\b/g;
    let words = string.match(regex);
    
    let upperWords = words.map(word => word.toUpperCase());
    console.log(upperWords.join(', '));
}

//extractAndConvertWords('Hi, how are you?');

//solve 2
function extractAndConvertWords(string) {
    let wordsArr = string.split(/[\W]+/);
    let resultArr = wordsArr.filter(x => x !== "");
    let text = resultArr.join(', ').toUpperCase();
    
    console.log(text);
}