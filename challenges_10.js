/*
*****************************Challenge 10**************************************
Les distributeurs automatiques permettent de taper des codes PIN, ces
derniers ne peuvent contenir que 4 chiffres ou exactement 6 chiffres. Si
la fonction est transmise est un code PIN valide, renvoyez true, sinon
renvoyez false.
ValidatePIN ("1234")  true
ValidatePIN ("12345")  false
ValidatePIN ("a234")  false
*/


//A solution would be to use a regular expression

const solution_1 = (arg) => {
  const pattern = /^\d{4,6}$/
}

//or

const solution_2 = (arg) =>{
  //we verify if the submitted param has length 4 or 6. Than we verify if every character is a number.
  return ( arg.length === 4 || arg.length === 6) && arg.split('').every(c => Boolean(Number(c)))
}
