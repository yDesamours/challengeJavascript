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
  
