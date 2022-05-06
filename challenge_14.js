/*
***********************challenge14*******************************
Créez une fonction qui, à partir d’un nombre donné sous la forme d’une chaîne de caractères, renvoit :
counterEffect("1250")  [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
counterEffect("0050")  [[0],[0],[0,1,2,3,4,5],[0]]
counterEffect("0000")  [[0],[0],[0],[0]]
*/


const solution1 = arg => {
  const numbers = arg.split('')
  const result = Array(numbers.length)
  
  numbers.map((cur, ind) => {
    result[ind] = []
    for(let i = 0; i <= +cur; i++)
      result[ind].push(i)
  })
  
  return result;
 }

const solution2 = arg => [...arg].map(v => Array(+v+1).keys())

const solution3 = arg => [...arg].map(v => Array.from({ length : v }, (_, i) => i))
