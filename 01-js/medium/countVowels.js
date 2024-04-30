/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  // let operatedstr = str.split("");
  // operatedstr.forEach(char => {
  //   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
  //     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
  //     vowelsCount++;
  //   }
  // });
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;