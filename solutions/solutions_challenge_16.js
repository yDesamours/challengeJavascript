const solution1 = (arg) => (
  Math.min(...arg.split(' ').map(v => v.length))
    
)

const solution2 = arg => arg.split(" ").sort((a, b) => a.length - b.length)[0].length
