/*
******************************challenge 20**************************************
Habituellement, lorsque vous achetez quelque chose, on vous demande votre numéro de carte de crédit,
votre numéro de téléphone ou votre réponse à une question secrète. Cependant, comme quelqu'un pourrait
regarder par-dessus votre épaule, vous ne voulez pas que cela s'affiche sur votre écran. Votre tâche
consiste à écrire une fonction maskify, qui modifie tous les caractères en '#' sauf les quatre derniers.
maskify('4556364607935616')  '############5616'
maskify('1')  '1'
maskify('11111')  '#1111'
*/

//we can extract all the characters from the beginning to the fourth counting from right. 
//we replace all of them by a # and we join the rest of the string

const solution1 = (arg) => {
  return arg.slice(0, -4).replace(/./g, '#') + arg.slice(-4)
}

//or
//we replace every character followed by a at least four others 

const solution2 = (arg) =>{
  return arg.replace(/.(?=....)/g, '#')
}
