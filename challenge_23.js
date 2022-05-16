/*
**************chalenge 23****************

Écrire une fonction smaller(arr) qui donne le nombre de nombres à droite de arr[i] qui lui sont inférieurs.
Par exemple :
smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0] // 4 nombres plus petits à droite de 5
smaller([1, 2, 0]) === [1, 1, 0] // Un plus petit que 1 (0), un plus petit que 2 (0)
*/

//for each element, create a new array with all the element that are at right, filter for the element that are lower
const solution1(arg) => {
  let result = arg.map((elem, ind) => arg.slice(ind + 1).filter(a => a < elem).length)
  return result
}
