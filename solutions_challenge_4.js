//Solution 1 using the replace function with a regular expression
//For both two solution we replace every number by ''

let solution1 = (args) => args.replace(/\d/g, '');

//Solution 2

let solution2 = (args) => args.replace(/[0-9]/g, '');
