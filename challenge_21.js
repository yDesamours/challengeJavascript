/*
**************************challenge 21**************************************
Vous recevrez une chaîne de caractères comme entrée. Il aura le mois (2 chiffres) et l'année (2 ou 4
chiffres). Ceux-ci sont séparés par un caractère ("-", "/" ou peut-être plusieurs espaces). Par exemple :
02/21
02/21
02 / 2021
02-2021
Votre tâche consiste à écrire une fonction qui renvoie true ou false suivant que la carte est encore valide
ou non.
Remarque : si la carte le mois courant, renvoyez true.
*/

//We must first extract de month and the year the we compare the year against the actual year, after, the month against the actual month

const solution1 = (arg) =>{
  const [month, year] = arg.split(/[/-]/)
  const currentDate = new Date()
  
  if(year > currentDate.getYear())
    return false
  
  if(month > currentDate.getMonth())
    return false
  
  return true
}
  
