/*
On vous donne une chaîne de mots, renvoyez le mot le plus long. S’il y en a plusieurs, prendre le dernier.
longestWord('a b c d e fgh')  "fgh"
longestWord('one two three')  "three"
longestWord('red blue grey')  "grey" 
*/

//solution1
// we sort the words in a descending order an we take the first

const solution1 = (arg) => (
  arg.split('').sort((a, b ) => a.length < b.length ? 1 : -1)[0]
)

//solution2
//we can retrieve the index of the word witch has the most letters

const solution2 = (arg) => {
  const arrayWithLength = [...arg.split('').map(c => c.length)]
  const greater = Math.max(...arrayWithLength) 
  
  return arrayWithLength.indexOf(greater)
}
