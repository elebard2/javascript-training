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

var sentence = "   Hello World!   "
var tilltheend = sentence.substr(1,6); /** contains the 6 characters from index #1*/
var inbetween = sentence.substring(1,6); /** contains the characters between index #1 and #6*/

console.log(tilltheend);
console.log(inbetween);

var s1=sentence.toLowerCase();/** puts all the characters in the string in lower case */
console.log(s1);
var s2=sentence.toUpperCase();/** puts all the characters in the string in UPPER CASE */
console.log(s2);
var s3=sentence.trim();/** removes all the blank spaces at both extremities of the string */
console.log(s3);