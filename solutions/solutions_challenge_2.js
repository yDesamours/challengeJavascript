//Solution 1 using a for loop.
//A variable initialized to zero is increment every time we reach a 'true' by traversing the array.

let solution1 = (args) => 
{
  let count = 0;
  
  for(let i in args)// we could also use a 'for of' loop
  {
    count += args[i];
  }
  
  return count;
};

//solution 2 using the filter method

let solution2 = (args) => args.filter(item => item).length;

//solution 2 using the filter method

let solution3 = (args) => args.reduce((acc, item) => acc + item, 0);
