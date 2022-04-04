//A first solution would to delete all the characters that are not a vowel and get the length of the remaining string

const solution1 = (arg) => {
  const onlyVowel = arg.replace(\[^aeiou]\.g, '')
  return onlyVowel.length
}
