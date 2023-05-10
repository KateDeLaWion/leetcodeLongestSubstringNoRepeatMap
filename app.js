/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let maxLength = 0;
  let left = 0;
  const charMap = new Map();

 // sliding window technique with 4 pointers
 // left  ;  sameCharIndex  ;   currentChar ie right 
  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    let sameCharIndex = charMap.get(currentChar);

    if (sameCharIndex !== undefined && sameCharIndex >= left) {
      left = sameCharIndex + 1;
    }

    charMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;   

};