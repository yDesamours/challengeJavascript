/*
****************************challenge 24*****************************************
L'acide désoxyribonucléique (ADN) est un produit chimique trouvé dans le noyau des
cellules et porte les « instructions » pour le développement et le fonctionnement des
organismes vivants. Dans les codes ADN, les symboles "A" et "T" sont
complémentaires l’un de l’autre, comme "C" et "G". Ecrire une fonction qui à partir
d’une chaine ADN donne son complémentaire.
DNAStrand ("ATTGC")  "TAACG"
DNAStrand ("GTAT")  "CATA"

*/

const solution1 = (arg) => {
  const match = {
    A : 'T',
    T : 'A',
    C : 'G',
    G : 'C'
  }
  
  return arg.replace(/(.)/g, c => match[c])
}

const solution2 = (arg) => {
  const match = {
    A : 'T',
    T : 'A',
    C : 'G',
    G : 'C'
  }
  
  return arg.split('').map(c => match[c]).join('')
}
  
