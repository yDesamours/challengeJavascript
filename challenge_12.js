/*
*************************challenge 12***************************
Renvoyez le nombre de voyelles (a, e, i, o, et u) dans une chaîne donnée.
getCount("Ceci est une phrase")  7
*/


  
//A first solution would to delete all the characters that are not a vowel and get the length of the remaining string

const solution1 = (arg) => {
  const onlyVowel = arg.replace(\[^aeiou]\.g, '')
  return onlyVowel.length
}
//or
const solution2 = (arg) => arg.split('').filter(c => ['a', 'e', 'i' ,'o', 'u'].includes(c)).length
  
//Another solution. Stock all the character into a table, run through that table and count the vowel
const solution3 = (arg) =>  arg.split('').reduce((acc, cur) => ['a', 'e', 'i' ,'o', 'u'].includes(cur) ? acc + 1 : acc, 0)
