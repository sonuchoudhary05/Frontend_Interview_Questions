function findLongestWord(sentence){
    let words = sentence.split(' ');
    let longestWords = '';
    for(let i=0;i<words.length;i++){
        if(words[i].length > longestWords.length){
            longestWords = words[i];
        }
    }
    return longestWords;
}
console.log(findLongestWord("JavaScript is a versatile programming languageEnglish."));
// Output : programming
