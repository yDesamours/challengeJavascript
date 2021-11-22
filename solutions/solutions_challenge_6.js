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
