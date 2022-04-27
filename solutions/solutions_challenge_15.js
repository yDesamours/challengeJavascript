const solution1 = (arg) => (
  arg.map(v => v.toString())
    .sort((a, b) => a.length > b.length ? -1 : +1)[0]
)

const solution1 = (arg) => {
 const temp = arg.map(v => v.toString().length)
 return temp.findIndex(c => Math.max(...temp))
}

