//Solution 1 using the 'method'

let solution1 = (args) => args.slice(1, -1);

//Solution 2 using the 'replace' method with a regular expression

let solution2 = (args) => args.replace(/^.|.$/g, '');
