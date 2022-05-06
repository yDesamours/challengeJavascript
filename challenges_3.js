/*
*****************************Challenge 3**************************************
En entrée on vous donne une chaîne de caractères, en sortie vous devez avoir la même phrase sans le
premier ni le dernier caractère.
removeChar("Ceci est une phrase")  "eci est une phras"
*/

//Solution 1 using the 'slice' method

let solution1 = (args) => args.slice(1, -1);

//Solution 2 using the 'replace' method with a regular expression

let solution2 = (args) => args.replace(/^.|.$/g, '');
