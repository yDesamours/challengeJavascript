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
