/*
************************challenge16***************************
On vous donne une chaîne de mots, renvoyez la longueur du ou des mots les plus courts.
La chaîne ne sera jamais vide et vous ne devez pas tenir compte des types de données (nombres, lettres
etc.).
findShort("bitcoin take over the world maybe who knows perhaps")  3
*/


const solution1 = (arg) => (
  Math.min(...arg.split(' ').map(v => v.length))
    
)

const solution2 = arg => arg.split(" ").sort((a, b) => a.length - b.length)[0].length
