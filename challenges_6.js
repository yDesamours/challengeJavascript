/*
*****************************Challenge 6**************************************
A partir d’une liste de nombres, supprimez les doublons et renvoyez la liste simplifiée sous forme ordonnée.
removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])
 Array [ 1, 2, 3, 4, 5 ]
*/


//using a for loop
const solution2 = (arg) => 
{
  const result = [];
  
  for(let cur in arg)
  {
    if(!result.includes(arg[cur]))
      result.push(arg[cur]);  
  }
  return result;
}


//using "reduce" method
const solution1 = (arg) => (arg.reduce((acc, cur) => acc.includes(cur) ? acc : acc.concat(cur), []));
