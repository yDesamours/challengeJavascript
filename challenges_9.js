/*
*****************************Challenge 9**************************************
La tribu Arara compte de la façon suivante :
1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak
Ecrire une fonction qui transforme un nombre en langage Arara.
countArara(1)  "anane"
countArara(3)  "adak anane"
countArara(8)  "adak adak adak adak
*/


//solution 9

const solution1 = (num) => {
  const numAnane = num % 2;
  const numAdak = Math.ceil(num / 2)
  
  const result = " adak".repeat(numAdak) + " anane ".repeat(numAnane)
  
  return result.trim();
}
