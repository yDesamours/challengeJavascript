const solution1 = arg => {
  const numbers = arg.split('')
  const result = Array(numbers.length)
  
  numbers.map((cur, ind) => {
    result[ind] = []
    for(let i = 0; i <= +cur; i++)
      result[ind].concat(i)
  })
  
  return result;
 }
