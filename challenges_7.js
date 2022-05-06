/*
*****************************Challenge 7**************************************
Deux joueurs - black et white - jouent à un jeu qui se compose de plusieurs tours. Si un joueur gagne
un tour, il commencera également le prochain. S’il perd, c'est l'autre joueur qui commencera. A partir de
la couleur du joueur actuel et du résultat du tour (true ou false), déterminez qui débutera le prochain
tour.
whoseMove("black",false)  "white"
whoseMove("white",true)  "white"
whoseMove("white",false)  "black"
 Array [ 1, 2, 3, 4, 5 ]
*/



//using a ternary expression and the "filter" method

const solution1 = (player, value) => value ? player : ["white", "black"].filter( c => (c != player));

const solution2 = (player, value) => {
  const opponent = {
    'white' : 'black',
    'black' : 'white'
  }
  
  return value ? player : opponent[player]
}
