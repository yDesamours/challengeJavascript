/*
*************************challenge11***************************
Ajoutez une méthode toJadenCase à String.prototype qui permettra de mettre en majuscules chaque
première lettre des mots d’une phrase donnée.
"Ceci est une phrase".toJadenCase()  "Ceci Est Une Phrase"
*/

String.prototype.toJadenCase = function (){
  return this.split(' ').map(c => c[0].toUpperCase()+c.slice(1)).join(' ');
}
