/*
*************************challenge 22*******************
Vous recevez une chaîne de nombres séparés par des espaces et vous devez renvoyer le nombre le plus
grand et le plus petit.
highAndLow("1 2 3 4 5")  "5 1"
highAndLow("1 2 -3 4 5")  "5 -3"
highAndLow("1 9 3 4 -5")  "9 -5"
*/
//sort all the input and return the first and the last
const solution1 = (arg) => {
  const input = arg.split(' ').sort((a, b)=> b - a)
  
  return input[0] + ' ' + input.slice(-1) 
}

//sort all the input and delete all wich are not the first or the last
const solution2 = (arg) => {
  const reject = [...arg.replaceAll(' ', '')].sort((a, b) => b - a)
      reject.splice(1, arg.length - 1)
  
  return reject.join(' ')
}
