let str1 = "listen",
  str2 = "silent";

const isAnagram = (x, y) => {
  if (x.length !== y.length) return false;
  let dictionary = {};
  let dictionaryLength = 0;
  for (let i = 0; i < str1.length; i++) {
    dictionary[str1.charAt(i)] = (dictionary[str1.charAt(i)] || 0) + 1;
    dictionaryLength += 1;
  }
  // console.log("Dictionary: ", dictionary);
  for (let i = 0; i < str2.length; i++) {
    if (!dictionary[str2.charAt(i)]) {
      return false;
    } else {
      dictionary[str2.charAt(i)] -= 1;
      dictionaryLength -= 1;
    }
  }
  return (
    dictionaryLength === 0 &&
    Object.values(dictionary).every((val) => val === 0)
  );
};

console.log(isAnagram(str1, str2));
