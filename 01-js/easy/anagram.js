/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  string1 = str1.toUpperCase().split('').sort().join('');
  string2 = str2.toUpperCase().split('').sort().join('');
  console.log(string1, string2)
  return string1 === string2;
}

module.exports = isAnagram;
