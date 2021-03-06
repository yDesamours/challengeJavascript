/*
*****************************Challenge 4**************************************
Votre patron a décidé d'économiser de l'argent en achetant un logiciel de reconnaissance de caractères
pour numériser d'anciens romans dans votre base de données. Il semble que les mots soient bien saisis,
mais vous remarquez rapidement qu'il y a aussi des nombres dans des endroits aléatoires dans le texte :
stringClean ('! !')  '! !'
stringClean ('123456789')  ''
stringClean("(E3at m2e2!!)")  "(Eat me!!)"
stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")  "Why can't we
buy the good software? #cheapskates"
Vos collaborateurs vous demandent une solution pour supprimer tous les nombres. Votre programme
prendra en entrée une chaîne, devra nettoyer tous les caractères numériques, et renverra une chaîne avec
les espacements, caractères et caractères spéciaux ~#$%^&!@*():; "'., tous intacts.
*/


//Solution 1 using the replace function with a regular expression
//For both two solution we replace every number by ''

let solution1 = (args) => args.replace(/\d/g, '');

//Solution 2

let solution2 = (args) => args.replace(/[0-9]/g, '');
