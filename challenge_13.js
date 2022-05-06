/*
************************challenge13*****************************
Des développeurs se sont inscrits pour assister à la prochaine réunion de codage que vous organisez.
Votre tâche consiste à renvoyer un objet qui comprend le nombre d'options alimentaires sélectionnées par
les développeurs sur le formulaire d'inscription. Par exemple, compte tenu du tableau de saisie suivant :
Var list1 = [
 {FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C'
 Repas: 'végétarien'},
 {FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue:
'JavaScript',
 Repas: 'standard'},
 {FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby',
 Repas: 'vegan'},
 {FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C'
 Repas: 'végétarien'},
];
Votre fonction doit renvoyer l'objet suivant (l'ordre des propriétés n'a pas d'importance):
{Végétarien: 2, standard: 1, vegan: 1}
*/

const solution1 = (arg) => arg.reduce((acc, cur) => acc[cur.Repas] ? (acc[cur.Repas]++, acc) : (acc[cur.Repas] = 1, acc), {})   
//not clear at all. I'll explain later

const solution2 = (arg) => arg.reduce((acc, cur) => (acc[cur.Repas] = (acc[cur.Repas] || 0) + 1 , acc), {})

const solution3 = arg => {
  const options = {}
  
  arg.map(cur => options.hasOwnProperty(cur.Repas) ? options[cur.Repas]++ : options[cur.Repas] = 1)
  
  return options
}
