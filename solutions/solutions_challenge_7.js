//using a ternary expression and the "filter" method

const solution1 = (player, value) => value ? player : ["white", "black"].filter( c => (c != player));
