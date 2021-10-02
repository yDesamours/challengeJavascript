//Solution 1 using the 'replace' method

let solution1 = (args) => args.replace(/(.)/g, "$2$2");

//Solution2 using an intermediary array.

let solution2 = (args) => args.split('').map(item => item+item).join('');
//we split the string into an array of character. Inside the array every character is double then we use the 'join' method to return a string

//Solution 3 acts like solution2 but using the spread operator

let solution3 = (args) => [...args].map(item => item+item).join('');
