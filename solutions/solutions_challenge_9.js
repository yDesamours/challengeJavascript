//solution 9

const solution1 = (num) => {
  const numAnane = num % 2;
  const numAdak = Math.ceil(num / 2)
  
  const result = " adak ".repeat(numAdak) + " anane ".repeat(numAnane)
  
  return result.trim();
}
