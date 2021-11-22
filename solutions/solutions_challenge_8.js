//solution 1

const solution1 = (args) => {
  const result = args.split("").map((elem, index) => elem.toUpperCase() + elem.repeat(index)).join("");
  
  return result;
}
