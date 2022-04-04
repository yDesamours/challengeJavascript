//using a ternary expression and the "filter" method

const solution1 = (player, value) => value ? player : ["white", "black"].filter( c => (c != player));

const solution2 = (player, value) => {
  const opponent = {
    'white' : 'black',
    'black' : 'white'
  }
  
  return value ? player : opponent[player]
}

