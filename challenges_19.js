/*
On vous demande de mettre au carré chaque chiffre d'un nombre.
Par exemple, si nous exécutons la fonction avec 9119, nous obtiendrons 811181.
*/

//simple

const solution1 = (arg) => (
  String(arg).split('').map(c => +c * +c).join('')
  )

const solution2 = (arg) => (
  String(arg).split('').map(c => Math.pow(+c, 2)).join('')
  )
