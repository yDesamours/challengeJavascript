const solution1 = (arg) => arg.reduce((acc, cur) => acc[cur.Repas] ? (acc[cur.Repas]++, acc) : (acc[cur.Repas] = 1, acc), {})   
//not clear at all. I'll explain later

const solution2 = (arg) => arg.reduce((acc, cur) => (acc[cur.Repas] = (acc[cur.Repas] || 0) + 1 , acc), {})

const solution3 = arg => {
  const options = {}
  
  arg.map(cur => options.hasOwnProperty(cur.Repas) ? options[cur.Repas]++ : options[cur.Repas] = 1)
  
  return options
}
