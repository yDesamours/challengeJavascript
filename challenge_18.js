/*
***************************challenge 18********************

Un tableau de taille N x M représente les pixels d'une image. Chaque cellule de ce tableau contient un
tableau de taille 3 avec les informations de couleur du pixel : [R, G, B]
Convertissez l'image couleur en une image moyenne en niveaux de gris.
Le tableau [R, G, B] contient des nombres entiers entre 0 et 255 pour chaque couleur.
Pour transformer un pixel de couleur en un pixel en niveaux de gris, utilisez la valeur moyenne des valeurs
de ce pixel : P = [R, G, B] => [(R + G + B) / 3, (R + G + B) / 3, (R + G + B) / 3]
Remarque : les valeurs pour le pixel doivent être entières, donc trouvez l'entier le plus proche.
Exemple
Voici un exemple d'image 2x2:
[
[[123, 231, 12], [56, 43, 124]],
[[78, 152, 76], [64, 132, 200]]
]
Voici l'image attendue après transformation :
[
[[122, 122, 122], [74, 74, 74]],
[[102, 102, 102], [132, 132, 132]]
*/

const solution1 = (arg) => (
  arg.map(c => c.map(d => Array(3).fill(Math.floor((d[0] + d[1] + d[2])/3))))
  )

const solution2 = (arg) => (
  arg.map(c => c.map(([r, g, b]) => Array(3).fill(Math.floor((r + g + b)/3))))
  )
