/*
***********************challenge15****************************
A partir d’une liste de nombres, trouvez celui avec le plus de chiffres.
Si deux nombres dans le tableau ont le même nombre de chiffres, renvoyez le premier de la liste.
findLongest([1, 10, 100])  100
findLongest([9000, 8, 800])  9000
findLongest([8, 900, 500])  900
*/


const solution1 = (arg) => (
  arg.map(v => v.toString())
    .sort((a, b) => a.length > b.length ? -1 : +1)[0]
)

const solution1 = (arg) => {
 const temp = arg.map(v => v.toString().length)
 return temp.findIndex(c => Math.max(...temp))
}
