/**
 * returns true if haystack contains needle
 * @param haystack
 * @param needle
 */

function contains (haystack, needle){
    return(haystack.indexOf(needle)>=0);
}

var isTrue = contains('Jack','ack');
var isFalse = contains ('Bonjour','dour');

console.log(isTrue, isFalse);

/**
 * différence entre substr() et substring()
 */

var sentence = "Hello World!"
var tilltheend = sentence.substr(1);
var inbetween = sentence.substring(1,6);

console.log(tilltheend);
console.log(inbetween);