//a first solution try to convert the string to a number and then check for is length

const solution1 = (arg) =>{
  const num = Number(arg)
  if(num || num === 0){
    if(arg.length === 4 || arg.length === 6)
      return true
  }
  return false
}

// or, shorter

const solution_2 = (arg) => {
  return Number(arg) && ((arg.length === 4) || (arg.length === 6))
}

//or
const solution_3 = (arg) => {
  return +arg && ((arg.length === 4) || (arg.length === 6))
}

//another solution would use a regular expression

const solution_4 = (arg) => {
  const pattern = /^\d{4,6}$/
}
