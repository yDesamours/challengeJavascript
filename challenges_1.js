/*
*****************************Challenge 1**************************************
Un bus se déplace en ville, il prend et/ou dépose certaines personnes à chaque arrêt.
Vous recevez une liste d’entiers. Chaque élément comporte le nombre de personnes qui
montent dans le bus (le premier élément) et le nombre de personnes qui en sortent (le
deuxième élément).
Le 2e nombre du premier élément de la liste vaut toujours 0 car le bus est vide en arrivant
au premier arrêt de bus. Votre tâche consiste à renvoyer le nombre de personnes encore
dans le bus après le dernier arrêt.
number([[10,0],[3,5],[5,8]]) -> 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) -> 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) -> 21
*/

//solution 1
//this solution extract two number from the original array using a for statement
//the one holds the sum of people who get on the bus 
//the other holds the sum of people who get off the bus 

let solution1 = (args) => 
{
  let length = args.length;
  let sumGettingOn = 0;
  let sumGettingOff = 0;
  let restAtArrival = 0;
  //determine sumGettingOn and sumGettingOff
  for(let i = 0; i < length; i++)
  {
     sumGettingOn += args[i][0];
     sumGettingOff += args[i][1];
  }
  
  return sumGettingOn - sumGettingOff;
}

//the relatively same solution ussing the array method "map"

let solution2 = (args) => 
{
  let sumGettingOn = 0;
  let sumGettingOff = 0;
  let restAtArrival = 0;
  //determine sumGettingOn and sumGettingOff
  args.map( c => { sumGettingOn += c[0]; sumGettingOff += c[1] });
  
  return sumGettingOn - sumGettingOff;
}

//We can make shorter using the array method "reduce"

let solution3 = (args) => args.reduce( (rest, element)=> rest += ( element[0] - element[1] ), 0);
  
