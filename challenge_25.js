/*
******************challenge 25 ***************************
Notre définition d’un nombre vampire peut être décrite comme suit :
6 * 21 = 126
Les chiffres 6, 1 et 2 sont présents dans le produit et le résultat, c’est un nombre vampire.
10 * 11 = 110
110 n'est pas un numéro vampire car il y a trois 1 dans le terme de gauche mais seulement deux 1 dans
le produit
vampire_test (21,6)  true
vampire_test (204,615)  true (204 * 615 = 125460)
vampire_test (30, -51)  true ( 30 * -51 = -1530)
vampire_test (-246, -510)  false (-246 * -510 = 125460)
vampire_test (2947050,8469153)  true
*/

const solution1 = (arg1, arg2) => {
  const left = String(arg1 * arg2).split('').sort((a, b)=> a <= b ? -1 : 1)
  const right = String(arg1).concat(String(arg2)).split('').sort((a, b)=> a <= b ? -1 : 1)
  
  return left === right
}
