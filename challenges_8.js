/*
*****************************Challenge 8**************************************
Ecrire une fonction accum telle que :
accum("abcd")  "A-Bb-Ccc-Dddd"
accum("RqaEzty")  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")  "C-Ww-Aaa-Tttt"
Remarquez les majuscules au début de chacun des blocs, le nombre de lettres croissant et la séparation
avec des tirets.
*/




//solution 1

const solution1 = (args) => {
  const result = args.split("").map((elem, index) => elem.toUpperCase() + elem.repeat(index)).join("");
  
  return result;
}
